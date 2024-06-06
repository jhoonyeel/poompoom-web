import styled from 'styled-components';
import { ReactComponent as All } from '../../../../../../assets/ALL_MOOD_VIEW.svg';

export default function SearchHeaderUI() {
  return (
    <Container>
      <ContentBox>
        <AllSvg />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
`;

const ContentBox = styled.div`
  width: 25%;
`;
const AllSvg = styled(All)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
