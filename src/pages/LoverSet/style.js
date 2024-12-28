import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.div`
  background-color: white;
  text-align: center;
  padding: 100px 0;
`;

export const Title = styled.div`
  color: #06564e;
  font-size: 36px;
  font-weight: bold;
  margin: 30px;
`;

export const SubTitle = styled.div`
  color: #9d9d9d;
  font-size: 24px;
`;

export const CompleteButton = styled.button`
  margin: auto;
  width: fit-content;
  padding: 10px 20px;
  background-color: #06564e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #047d70;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 680px;
  height: 172px;
  font-size: 36px;
  border-radius: 100px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 80px;
  background: transparent;
  border: none;
  font-size: 20px;
  width: fit-content;
  cursor: pointer;
  color: #aaaaaa;
  &:hover {
    color: #000;
  }
`;
