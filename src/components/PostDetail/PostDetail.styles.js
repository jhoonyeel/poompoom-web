import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1440px;
  height: 1024px;

  margin: 0;
`;

export const CurrentImage = styled.div`
  transform: translateX(-20rem);
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

export const Title = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
`;

export const Name = styled.div`
  margin: 0 1rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  width: 388px;
  height: 510px;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const BoardContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 617px;
  height: 303.07px;
  padding: 1rem;
  border: 1px solid gainsboro;
  overflow-y: auto;
  word-wrap: break-word;
`;

export const BoardNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const SliderBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;

export const CommentWrapper = styled.div`
  position: absolute;
  top: 460px;
  right: 0px;
`;

/*
 {placeholderImages.map((imageUrl, index) => (
  <Image src={imageUrl} alt={`이미지 ${index + 1}`} />
))}
*/
