import styled from 'styled-components';

export default function ReviewPostBackgroundUI({ bodyPhoto }) {
  return (
    <Wrapper>
      <BackgroundImg
        src={bodyPhoto || `https://cdn.imweb.me/thumbnail/20240112/19ca28a224773.jpg`}
        alt={`Post ${bodyPhoto} 사진`}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 370px;
  border-radius: 20px;
  overflow: hidden;
`;
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
