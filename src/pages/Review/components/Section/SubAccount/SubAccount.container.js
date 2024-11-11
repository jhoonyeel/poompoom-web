import { useEffect, useState } from 'react';
import axios from '../../../../../apis/axios';
import { DEFAULT_SUBSCRIBER_STATE } from '../../../../../constants/SubscriptionInitialState';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';
import { useNavigatePath } from '../../../../../hooks/useNavigatePath';
import SubAccountUI from './SubAccount.presenter';

const fetchSubAccountData = async (cursorId, size) => {
  const res = await axios.get(`/subscribe`, {
    params: {
      cursorId,
      size,
    },
  });
  const { values, nextPageId, hasNext } = res.data;
  return { values, nextPageId, hasNext };
};

export default function SubAccount() {
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: fetchSubAccountData,
    initialSize: 10,
    additionalSize: 10,
    initialCursorId: 1,
  });
  const [subAccounts, setSubAccounts] = useState([]);

  const [isFollow, setIsFollow] = useState(false);
  const handleFollow = () => {
    setIsFollow((follow) => !follow);
  };
  const navigatePath = useNavigatePath();

  // rawData 업데이트 시 subAccounts를 업데이트
  useEffect(() => {
    setSubAccounts((prevAccounts) => [
      ...prevAccounts,
      ...rawData.map((subscriber) => ({
        ...DEFAULT_SUBSCRIBER_STATE, // 기본 상태로 초기화 후 새로운 데이터 덮어쓰기
        ...subscriber,
      })),
    ]);
    console.log('useEffect', subAccounts);
  }, [rawData]);

  /*
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [cursorId, setCursorId] = useState(1); // 최소 cursorId 1로 설정
  const [hasNext, setHasNext] = useState(true); // 다음 페이지 여부
  const loader = useRef(null);

  const fetchAccountData = async (page, size = 10, currentCursorId = cursorId) => {
    try {
      console.log('/subscribe API 실행');
      const res = await axios.get(`/subscribe`, {
        params: {
          page,
          size,
          cursorId: currentCursorId,
        },
      });
      const { values, nextPageId, hasNext: newHasNext } = res.data;
      setSubAccounts((prevAccounts) => [
        ...prevAccounts,
        ...values.map((subscriber) => ({
          ...DEFAULT_SUBSCRIBER_STATE, // 기본 상태로 초기화 후
          ...subscriber, // 새로운 데이터로 덮어쓰기
        })),
      ]);
      setCurrentPage(page);
      setCursorId(nextPageId || currentCursorId);
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchAccountData(currentPage, 10, cursorId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchAccountData(currentPage + 1, 10, cursorId);
        }
      },
      { threshold: 1 },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [currentPage, hasNext, cursorId]);
  */

  return (
    <>
      <SubAccountUI
        subAccounts={subAccounts}
        isFollow={isFollow}
        handleFollow={handleFollow}
        navigatePath={navigatePath}
      />
      <div ref={loaderRef} style={{ height: '20px' }} />
    </>
  );
}
