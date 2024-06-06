import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../../../apis/axios';
import SubAccountUI from './SubAccount.presenter';

export default function SubAccount() {
  const [subAccounts, setSubAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [pageSize, setPageSize] = useState(5); // 페이지 크기 상태
  const [hasNext, setHasNext] = useState(true); // 다음 페이지 여부
  const loader = useRef(null);

  const navigate = useNavigate();
  const handleAccountClick = (post) => {
    navigate(`/review/${post.subscribeId}`);
  };

  const fetchAccountData = async (page = 1, size = 5) => {
    try {
      const res = await axios.get(`/subscribe`, {
        params: {
          page,
          size,
        },
      });
      console.log('Request Headers: ', res.config.headers); // 요청 헤더를 로그에 출력
      console.log('Response Headers: ', res.headers); // 응답 헤더를 로그에 출력
      const { values, totalPages } = res.data;
      setSubAccounts((prevPosts) => [...prevPosts, ...values]);
      setCurrentPage(page);
      setHasNext(page + 1 < totalPages);
      console.log('서버로부터 받은 데이터: ', res.data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchAccountData(currentPage + 1, pageSize);
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
  }, [currentPage, hasNext]);

  return <SubAccountUI subAccounts={subAccounts} />;
}
