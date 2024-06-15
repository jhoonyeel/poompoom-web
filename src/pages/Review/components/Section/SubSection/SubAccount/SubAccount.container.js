import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../../../apis/axios';
import SubAccountUI from './SubAccount.presenter';

export default function SubAccount() {
  const [subAccounts, setSubAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [cursorId, setCursorId] = useState(1); // 최소 cursorId 1로 설정
  const [hasNext, setHasNext] = useState(true); // 다음 페이지 여부
  const loader = useRef(null);

  const [isFollow, setIsFollow] = useState(false);
  const handleFollow = () => {
    setIsFollow((follow) => !follow);
  };

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  const fetchAccountData = async (page, size = 10, currentCursorId = cursorId) => {
    try {
      const res = await axios.get(`/subscribe`, {
        params: {
          page,
          size,
          cursorId: currentCursorId,
        },
      });
      const { values, nextPageId, hasNext: newHasNext } = res.data;
      setSubAccounts((prevAccounts) => [...prevAccounts, ...values]);
      setCurrentPage(page);
      setCursorId(nextPageId || currentCursorId);
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
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

  return (
    <>
      <SubAccountUI
        subAccounts={subAccounts}
        isFollow={isFollow}
        handleFollow={handleFollow}
        handleOnClick={handleOnClick}
      />
      <div ref={loader} style={{ height: '20px' }} />
    </>
  );
}
