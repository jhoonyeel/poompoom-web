import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const transformData = (data) => {
  return data.values.map((item) => ({
    id: item.communityId,
    title: item.title,
    createAt: '날짜', // 필요에 따라 실제 날짜로 변경하세요
    writer: '작성자', // 필요에 따라 실제 작성자로 변경하세요
  }));
};

const fetchCommunityPosts = async () => {
  const response = await axios.get('http://ec2-3-37-97-52.ap-northeast-2.compute.amazonaws.com/community?page=1');
  return transformData(response.data);
};

function CommunityList() {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  // const [communityPosts, setCommunityPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://ec2-3-37-97-52.ap-northeast-2.compute.amazonaws.com/community?page=1
  //       `); // 백엔드 API 엔드포인트
  //       const { data } = response;
  //       const transformedData = transformData(data);
  //       setCommunityPosts(transformedData);
  //     } catch (error) {
  //       console.error('Error fetching community lists:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { data: communityPosts, error, isLoading } = useQuery('communityPosts', fetchCommunityPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching community lists</div>;

  return (
    <div>
      <MapList>
        <MapTitle>번호</MapTitle>
        <MapTitle>제목</MapTitle>
        <MapTitle>작성자</MapTitle>
        <MapTitle>날짜</MapTitle>
      </MapList>

      {communityPosts.map((el) => (
        <MapList key={el.id} onClick={handleOnClick('/community/detail')}>
          <List>{el.id}</List>
          <List>{el.title}</List>
          <List>{el.writer}</List>
          <List>{el.createAt}</List>
        </MapList>
      ))}

      <NewPostBtn onClick={handleOnClick('/community/write')}>새로 작성하기</NewPostBtn>
    </div>
  );
}
export default CommunityList;

const MapList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MapTitle = styled.div`
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NewPostBtn = styled.button`
  width: 6rem;
  height: 2rem;
`;

const List = styled.div`
  width: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;
