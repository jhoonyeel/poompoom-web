import styled from 'styled-components';
import { ReactComponent as Recent } from '../../../../../../assets/RECENT_VIEW.svg';

export default function LatestHeaderUI() {
  return (
    <Container>
      <ContentBox>
        <RecentSvg />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  border: 3px solid #aaa;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
`;

const ContentBox = styled.div`
  width: 25%;
`;
const RecentSvg = styled(Recent)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
