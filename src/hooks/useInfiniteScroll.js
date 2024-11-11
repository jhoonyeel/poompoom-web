import { useEffect, useRef, useState } from 'react';

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

  // 데이터를 페칭하는 함수, cursorId와 size는 컴포넌트에서 직접 관리
  const loadMoreData = async (size = additionalSize) => {
    if (isFetching || !hasNext) return; // 이미 fetching 중이면 중복 호출 방지
    setIsFetching(true);

    try {
      // 'values' 데이터 배열
      // 'nextPageId' 다음 페이지 커서의 키 이름
      // 'hasNext' 더 가져올 데이터 여부
      const { values, nextPageId, hasNext: newHasNext } = await fetchFunction(cursorId, size); // 현재 cursorId, 가져올 데이터 size를 인자로 호출

      setRawData((prevData) => [...prevData, ...values]); // 데이터 가공 없이 페칭된 데이터 추가
      setCursorId(nextPageId); // 다음 페칭을 위해 cursorId 업데이트
      setHasNext(newHasNext && nextPageId !== undefined); // 다음 데이터가 있는지 여부 업데이트, nextPageId가 undefined면 hasNext를 false로 설정
    } catch (error) {
      console.error('커스텀 훅에서 오류', error);
    } finally {
      setIsFetching(false);
    }
  };

  // 첫 번째 로드 시 초기 size 사용
  useEffect(() => {
    loadMoreData(initialSize);
  }, []);

  // Intersection Observer 설정
  useEffect(() => {
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

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [cursorId, hasNext]);

  return { rawData, loaderRef, isFetching };
};
