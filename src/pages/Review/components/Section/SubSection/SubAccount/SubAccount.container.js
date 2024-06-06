import { useEffect, useRef, useState } from 'react';
import axios from '../../../../../../apis/axios';
import SubAccountUI from './SubAccount.presenter';

export default function SubAccount() {
  const [subAccounts, setSubAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [hasNext, setHasNext] = useState(true); // 다음 페이지 여부
  const loader = useRef(null);

  const fetchAccountData = async (page, size = 5) => {
    try {
      const res = await axios.get(`/subscribe`, {
        params: {
          page,
          size,
        },
      });
      const { values, totalPages } = res.data;
      setSubAccounts((prevAccounts) => [...prevAccounts, ...values]);
      setCurrentPage(page);
      setHasNext(page < totalPages);
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
          fetchAccountData(currentPage + 1, 5);
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
