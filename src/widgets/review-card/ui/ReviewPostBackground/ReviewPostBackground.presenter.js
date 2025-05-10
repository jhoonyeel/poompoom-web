import styled from 'styled-components';

export default function ReviewPostBackgroundUI({ bodyPhoto }) {
  return (
    <Wrapper>
      <BackgroundImg src={bodyPhoto} alt="ReviewPostBackground 이미지" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 220px;
  height: 290px;
  border-radius: 20px;
  overflow: hidden;
`;
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
