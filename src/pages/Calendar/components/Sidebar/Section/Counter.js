import styled from 'styled-components';
import { useState } from 'react';
import { Container } from '../Style';
import { ReactComponent as ProfileImg } from '../../../../../assets/Calender/Sidebar/emptyCalenderProfile.svg';
import { ReactComponent as CalenderCount } from '../../../../../assets/Calender/Sidebar/calenderCount.svg';
import { ReactComponent as CalenderHeart } from '../../../../../assets/Calender/Sidebar/calenderHeart.svg';

export default function Counter() {
  const [startDate, setStartDate] = useState('');
  const [Together, setTogether] = useState(0);
  const [mileStones, setMileStones] = useState([]);

  const calculateMilestones = (days) => {
    const nDays = [];
    const nYear = [];

    for (let i = Math.ceil(days / 100) * 100; nDays.length < 2; i += 100) {
      nDays.push({ label: `${i}일`, daysLeft: i - days });
    }

    // eslint-disable-next-line no-plusplus
    for (let i = Math.ceil(days / 365); nYear.length < 1; i++) {
      const anniversaryDays = i * 365;
      if (anniversaryDays > days) {
        nYear.push({ label: `${i}주년`, daysLeft: anniversaryDays - days });
      }
    }

    setMileStones([...nDays, ...nYear]);
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleSubmit = () => {
    if (!startDate) return;

    const today = new Date();
    const start = new Date(startDate);
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setTogether(diffDays);
    calculateMilestones(diffDays);
  };

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
      <CountSection>
        {!Together ? (
          <InputSection>
            <label
              htmlFor="date"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              사랑이 시작된 날<input id="date" type="date" value={startDate} onChange={handleDateChange} />
              <Button onClick={handleSubmit}>확인</Button>
            </label>
          </InputSection>
        ) : (
          <>
            <Count>사랑한 지 {Together}일 째</Count>

            {mileStones.map((mileStone, index) => (
              <DdayCount key={index}>
                <CCount />
                <strong>{mileStone.label}</strong>· {mileStone.daysLeft}일 남음
              </DdayCount>
            ))}
          </>
        )}
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
  padding-top: 300px;
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

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10px;
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

const Button = styled.div`
  border: 1px solid #ababab;
  background-color: #fff;
`;
