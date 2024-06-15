import styled from 'styled-components';
import { ReactComponent as All } from '../../../../../../assets/Title/ALL_MOOD_VIEW.svg';

export default function SearchHeaderUI() {
  return (
    <Wrapper>
      <ContentBox>
        <AllSvg />
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 2rem;
`;
const ContentBox = styled.div`
  width: 25%;
  height: 100%;
`;
const AllSvg = styled(All)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
