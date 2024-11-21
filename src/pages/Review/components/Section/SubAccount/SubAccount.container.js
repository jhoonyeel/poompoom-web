import { useEffect, useState } from 'react';
import axios from '../../../../../apis/axios';
import { DEFAULT_SUBSCRIBER_STATE } from '../../../../../constants/SubscriptionInitialState';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';
import { useNavigatePath } from '../../../../../hooks/useNavigatePath';
import SubAccountUI from './SubAccount.presenter';

const fetchSubAccountData = async (cursorId, size) => {
  const res = await axios.get(`/recommend/profile`, {
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
  const navigatePath = useNavigatePath();

  // rawData 업데이트 시 UI 렌더링
  useEffect(() => {
    setSubAccounts((prevAccounts) => {
      const newAccounts = rawData
        .map((subscriber) => ({
          ...DEFAULT_SUBSCRIBER_STATE, // 기본 상태로 초기화 후 새로운 데이터 덮어쓰기
          ...subscriber,
        }))
        .filter(
          (newAccount) => !prevAccounts.some((existingAccount) => existingAccount.memberId === newAccount.memberId), // 중복 제거
        );
      return [...prevAccounts, ...newAccounts];
    });
    console.log(subAccounts);
  }, [rawData]);

  const getNickname = (nickname) => {
    const atIndex = nickname.indexOf('@');
    return atIndex !== -1 ? nickname.slice(0, atIndex) : nickname;
  };

  return (
    <>
      <SubAccountUI
        loaderRef={loaderRef}
        subAccounts={subAccounts}
        getNickname={getNickname}
        navigatePath={navigatePath}
      />
    </>
  );
}
