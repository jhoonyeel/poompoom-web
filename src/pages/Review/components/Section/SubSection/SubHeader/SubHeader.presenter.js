import styled from 'styled-components';
import { ReactComponent as Subscribed } from '../../../../../../assets/Title/SUBSCRIBED_VIEW.svg';

export default function SubHeaderUI() {
  return (
    <Wrapper>
      <ContentBox>
        <SubscribedSvg />
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
const SubscribedSvg = styled(Subscribed)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
