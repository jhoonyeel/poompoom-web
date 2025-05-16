import styled from 'styled-components';

const CardPreview = ({ body }) => {
  const MAX_LENGTH = 80;
  const truncatedBody = body.length > MAX_LENGTH ? `${body.slice(0, MAX_LENGTH)}...` : body;

  return (
    <Wrapper>
      <Paragraph>{`${truncatedBody}`}</Paragraph>
    </Wrapper>
  );
};

export default CardPreview;

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
