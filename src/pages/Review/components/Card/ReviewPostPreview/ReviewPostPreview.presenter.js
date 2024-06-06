import styled from 'styled-components';

export default function ReviewPostPreviewUI() {
  return (
    <Wrapper>
      <p>본문 내용입니다. </p>
      <p>추가적인 내용</p>
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
