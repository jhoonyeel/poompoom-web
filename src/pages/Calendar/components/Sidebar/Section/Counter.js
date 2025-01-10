import styled from 'styled-components';
import { Container } from '../Style';
import { ReactComponent as ProfileImg } from '../../../../../assets/Calender/Sidebar/emptyCalenderProfile.svg';
import { ReactComponent as CalenderCount } from '../../../../../assets/Calender/Sidebar/calenderCount.svg';
import { ReactComponent as CalenderHeart } from '../../../../../assets/Calender/Sidebar/calenderHeart.svg';

export default function Counter() {
  return (
    <Container>
      <ProfileSection>
        <ProfileContainer>
          <ProfileImg />
          <Name>솔</Name>
        </ProfileContainer>
        <CalenderHeart />
        <ProfileContainer>
          <ProfileImg />
          <Name>미야</Name>
        </ProfileContainer>
      </ProfileSection>
      <Count>사랑한 지 456일 째</Count>

      <CountSection>
        <DdayCount>
          <CCount />
          500일 · 44일 남음
        </DdayCount>

        <DdayCount>
          <CCount />
          600일 · 000일 남음
        </DdayCount>

        <DdayCount>
          <CCount />
          2주년 · 000일 남음
        </DdayCount>
      </CountSection>
    </Container>
  );
}

const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 200px;
`;
const ProfileContainer = styled.div``;
const Name = styled.div``;
const Count = styled.div`
  color: #4f4f4f;
  font-size: 13px;
`;
const CountSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
const DdayCount = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: #ababab;
`;

const CCount = styled(CalenderCount)`
  margin-right: 10px;
`;
