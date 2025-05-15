import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTopButton = () => {
  const scrollToTop = useScrollToTop();

  return (
    <Wrapper onClick={scrollToTop}>
      <UpIcon icon={faChevronUp} />
    </Wrapper>
  );
};

export default ScrollToTopButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 80px;
  z-index: 999;
  width: 75px;
  height: 75px;
  border: 3px solid gray;
  border-radius: 50%;
  cursor: pointer;
`;
const UpIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
