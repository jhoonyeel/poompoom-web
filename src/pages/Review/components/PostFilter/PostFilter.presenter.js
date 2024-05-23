import React from 'react';
import styled from 'styled-components';

export default function PostFilterUI() {
  return (
    <Layout>
      <div>
        <span>깔대기 아이콘</span> {/** 추후에 컴포넌트 사용 */}
      </div>
      <div>
        <span>스르륵 아이콘</span> {/** 추후에 컴포넌트 사용 */}
      </div>
      <div>
        <span>인기순</span>
        <span>최신순</span>
        <span>추천순</span>
      </div>
      <span>가격대 정렬</span>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
  border: 3px solid #aaa;
`;
