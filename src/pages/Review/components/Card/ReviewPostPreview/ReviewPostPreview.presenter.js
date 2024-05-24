import styled from 'styled-components';

export default function ReviewPostPreviewUI() {
  // preview 깜빡임 현상 제거
  return (
    <Box>
      <p>본문 내용입니다. </p>
      <p>추가적인 내용</p>
    </Box>
  );
}

const Box = styled.div`
  width: 200px;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 99999;
  position: absolute;
`;
