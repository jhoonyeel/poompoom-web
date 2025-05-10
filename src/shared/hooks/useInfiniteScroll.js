import { useCallback, useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = ({
  fetchFunction, // 데이터를 가져오는 비동기 함수
  initialSize, // 초기에 가져올 데이터 개수
  additionalSize, // 추가로 가져올 데이터 개수
  initialCursorId = null, // SubSection을 위한 설정
}) => {
  const [rawData, setRawData] = useState([]); // 원본 데이터만 관리
  const [cursorId, setCursorId] = useState(initialCursorId); // cursorId보다 id가 작은 게시글을 가져옴
  const [hasNext, setHasNext] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);

  // 데이터 초기화 함수
  const resetData = useCallback(() => {
    setRawData([]); // 기존 데이터 초기화
    setCursorId(initialCursorId); // 초기 커서로 리셋
    setHasNext(true); // 더 가져올 데이터가 있다고 설정
  }, [initialCursorId]);

  // 데이터를 페칭하는 함수, cursorId와 size는 컴포넌트에서 직접 관리
  const loadMoreData = useCallback(
    async (size = additionalSize) => {
      if (isFetching || !hasNext) return; // 이미 fetching 중이거나 데이터가 더 없으면 중복 호출 방지
      setIsFetching(true);

      try {
        // 'values' 데이터 배열
        // 'nextPageId' 다음 페이지 커서의 키 이름
        // 'hasNext' 더 가져올 데이터 여부
        const { values, nextPageId, hasNext: newHasNext } = await fetchFunction(cursorId, size); // 현재 cursorId, 가져올 데이터 size를 인자로 호출

        setRawData((prevData) => [...prevData, ...values]); // 데이터 가공 없이 페칭된 데이터 누적 추가
        setCursorId(nextPageId); // 다음 페칭을 위해 cursorId 업데이트
        setHasNext(newHasNext && nextPageId !== undefined); // 다음 데이터가 있는지 여부 업데이트, nextPageId가 undefined면 hasNext를 false로 설정
      } catch (error) {
        console.error('커스텀 훅에서 오류', error);
      } finally {
        setIsFetching(false);
      }
    },
    [fetchFunction, cursorId, hasNext],
  );

  // 첫 번째 데이터 로드
  useEffect(() => {
    // TODO: 초기 fetch 반복 bug 해결 필요
    if (rawData.length === 0 && hasNext && !isFetching) {
      loadMoreData(initialSize);
    }
  }, [loadMoreData]); // fetchFuction이 바뀌면 실행

  // Intersection Observer 설정
  useEffect(() => {
    if (!hasNext || isFetching || rawData.length === 0) return; // 초기화 이후 불필요한 호출 방지

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNext) {
          loadMoreData(additionalSize); // 추가로 가져오는 데이터
        }
      },
      { threshold: 1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [cursorId, hasNext]);

  return { rawData, loaderRef, isFetching, resetData };
};
