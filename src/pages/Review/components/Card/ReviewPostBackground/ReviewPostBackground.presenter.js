import styled from 'styled-components';

export default function ReviewPostBackgroundUI({ post }) {
  return (
    <Wrapper>
      <BackgroundImg src="https://cdn.imweb.me/thumbnail/20240112/19ca28a224773.jpg" alt={`Post ${post} 사진`} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 380px;
  height: 430px;
  border-radius: 20px;
  overflow: hidden;
`;
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
