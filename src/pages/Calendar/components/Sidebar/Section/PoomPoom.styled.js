import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 7%;
  ${(props) => (props.children === '<' ? 'left: 30px;' : 'right: 30px;')}
  transform: translateY(-50%);
`;

export const SectionWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
  border-radius: 8px;
`;

export const Section = styled.div`
  padding: 10px;
  gap: 10px;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  width: 280px;
  cursor: pointer;
`;

export const EventColor = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 4px;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280;
`;

export const EventTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const EventDate = styled.span`
  font-size: 10px;
  color: gray;
`;

export const NoEventsMessage = styled.div`
  color: gray;
  font-size: 14px;
  text-align: center;
`;

export const LogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 80px);
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LogBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative; /* 부모 요소에 상대적 위치를 지정 */

  &:hover img {
    opacity: 0.3;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HoverDate = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  position: absolute; /* 이미지 위에 위치하도록 설정 */
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  ${LogBox}:hover & {
    display: block;
  }
`;

export const NoImageText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  border-radius: 10px;
`;

export const NoPostsMessage = styled.div`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: rgb(99, 87, 93);
  font-weight: bold;
  margin-top: 20px;
`;
