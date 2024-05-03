import styled from 'styled-components';

function CommunityList() {
  const onClickTokNew = () => {};
  const onClickToDetail = () => {};
  // react-router-dom 설치 필요

  const communityPosts = [
    {
      id: 1,
      title: '첫 번째 포스트',
      createAt: '날짜',
      writer: '작성자',
    },
    {
      id: 2,
      title: '두 번째 포스트',
      createAt: '날짜',
      writer: '작성자',
    },
    {
      id: 3,
      title: '세 번째 포스트',
      createAt: '날짜',
      writer: '작성자',
    },
  ];

  return (
    <div>
      <MapList>
        <MapTitle>번호</MapTitle>
        <MapTitle>제목</MapTitle>
        <MapTitle>작성자</MapTitle>
        <MapTitle>날짜</MapTitle>
      </MapList>

      {communityPosts.map((el) => (
        <MapList key={el.id}>
          <List>{el.id}</List>
          <List onClick={onClickToDetail}>{el.title}</List>
          <List>{el.writer}</List>
          <List>{el.createAt}</List>
        </MapList>
      ))}

      <NewPostBtn onClick={onClickTokNew}>새로 작성하기</NewPostBtn>
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
