import { createPortal } from 'react-dom';
import styled from 'styled-components';
import usePortal from '../hooks/usePortal.js';

const PortalContainer = ({ isVisible, id, children }) => {
  const target = usePortal(id); // 주어진 id로 포털 부모 요소를 얻음
  return createPortal(
    isVisible ? <Container>{children}</Container> : null,
    target, // 포털의 부모 DOM 요소
  );
};

export default PortalContainer;
// 변수 선언 후 내보내기

const Container = styled.div`
  border: 1px solid black;
`;
