import styled from 'styled-components';

export default function ReviewPostPreviewUI({ body }) {
  return (
    <Wrapper>
      <Paragraph>{`${body}`}</Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 380px;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 99999;
  position: absolute;
  border-radius: 20px;
`;
const Paragraph = styled.p`
  font-family: 'TAEBAEKmilkyway';
  font-size: 24px;
  color: #ffffff;
  padding: 10px 20px;
  text-align: left;
  line-height: 1.3;
  word-spacing: 2px;
`;
