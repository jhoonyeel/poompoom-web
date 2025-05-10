import styled from 'styled-components';

export default function ReviewPostPreviewUI({ body }) {
  return (
    <Wrapper>
      <Paragraph>{`${body}`}</Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
  width: 190px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.56);
  border-radius: 20px;
`;
const Paragraph = styled.p`
  padding: 10px 20px;
  text-align: left;
  color: #fff;
  font-size: 16px;
  font-family: 'TAEBAEKmilkyway';
  line-height: 1.4;
  word-spacing: 3px;
`;
