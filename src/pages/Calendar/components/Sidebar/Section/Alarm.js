import styled from 'styled-components';
import { Container, SidebarTitle } from '../Style';

export default function Alarm() {
  return (
    <Container>
      <SidebarTitle>캘린더 알림센터</SidebarTitle>
      <AlarmContainer>
        <Profile />
        <AlramText>일정을 작성했습니다.</AlramText>
        <Date>방금 전</Date>
      </AlarmContainer>
      <AlarmContainer>
        <Profile />
        <AlramText>일정을 작성했습니다.</AlramText>
        <Date>방금 전</Date>
      </AlarmContainer>
      <ViewAllButton>전체 알람 보기 </ViewAllButton>
    </Container>
  );
}

const AlarmContainer = styled.div`
  width: 247px;
  height: 27px;
  background-color: #fbfbfb;
  color: #ababab;
  font-size: 9px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: rgb(231, 231, 231);
  }
`;

const Profile = styled.div``; // 작성자에 따라 태두리 색 구분

const AlramText = styled.div``;

const Date = styled.div`
  font-size: 7px;
`; // 예: 5분 이내일 경우 방금 전으로 택스트 수정

const ViewAllButton = styled.div`
  font-size: 9px;
`; // 모달? 아니면 넘기기?
