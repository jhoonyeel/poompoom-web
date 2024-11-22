import styled from 'styled-components';

export const BasketContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(222, 227, 209, 0.74);
  width: 60%;
  margin: auto;
`;
export const Wrapper = styled.div`
  margin: 100px 0;
  margin-bottom: 10px;
  color: #174b39;
  font-size: 25px;
  font-family: 'S-CoreDream-3Light';
`;
export const Button = styled.button`
  margin: 10px 0;
  width: fit-content;
  background-color: wheat;
  border: none;
  font-size: 20px;
  font-family: 'seolleimcool-SemiBold';
`;

export const IntroText = styled.div`
  margin-top: 10rem;
  font-size: 35px;
  font-family: 'S-CoreDream-3Light';
  font-weight: bold;
  margin-bottom: 20px;
  color: #174b39;
`;

export const Basket = styled.div`
  display: flex;
  flex-direction: column;
  background: wheat;
  width: 279px;
  height: 279px;
  border-radius: 10px;
  margin: 0 1rem;
  padding: 1rem;
  border: 3px solid #174b39;
`;

export const SubmitButton = styled.button`
  margin: 50px 0;
  padding: 1rem;
  border: 3px solid #174b39;
  background-color: wheat;
  border-radius: 50px;
  font-size: 20px;
  color: #174b39;
  transition: all 0.2s ease-in-out;
  font-family: 'seolleimcool-SemiBold';

  &:hover {
    color: wheat;
    background-color: #174b39;
  }
`;
