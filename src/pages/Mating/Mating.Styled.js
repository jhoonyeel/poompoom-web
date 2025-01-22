import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: rgb(22, 56, 31);
  color: white;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgb(43, 95, 45);
  }
`;

export const RejectButton = styled(Button)`
  background-color: #f44336;
  &:hover {
    background-color: #e53935;
  }
`;

export const RequestList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const RequestItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;
