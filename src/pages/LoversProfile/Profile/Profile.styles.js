import styled from 'styled-components';

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

export const Text = styled.div`
  position: relative;
  font-size: 25px;
`;
export const Num = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-150px, -120%);
  font-size: 15px;
`;

export const CommentWrapper = styled.div`
  transform: translate(-250px, 0);
  position: relative;
`;

export const SubText = styled.div`
  font-size: 18px;
  color: #676767;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const IntroText = styled.h1`
  font-size: 46px;
  margin-top: 10rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #696969;
`;

export const LoverName = styled.input`
  font-size: 24px;
  border-radius: 50%;
  background-color: #767676;
  width: 234px;
  height: 94px;
  margin: 0 1rem;
  padding-left: 1.5rem;
  &::placeholder {
    color: #ffffff;
    opacity: 0.7;
    font-size: 24px;
  }
`;
export const RoundButton = styled.button`
  width: 237px;
  height: 237px;
  border: 15px solid #696969;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    border: 15px solid #000000;
  }
`;
export const Gogosing = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 437px;
  height: 230px;
  border-radius: 50%;
  padding: 2.5rem;
  background-color: #06564e;
  border: 20px solid white;
  color: white;
  font-size: 34px;
  transform: translate(0, -100px);
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.31);
  &:hover {
    background-color: #3a716c;
  }
`;
export const HeadContainer = styled.div`
  width: 100%;
  height: 92%;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.31);
  padding-bottom: 10rem;
  z-index: 5;
  background-color: white;
`;

export const BasketContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20rem;
`;

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const BasketContainer2 = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileExeWrapper = styled.div`
  margin-top: 5rem;
  transform: translateY(-400px);
`;

export const Footer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterText1 = styled.div`
  color: #06564e;
  font-size: 50px;
  margin-top: 1rem;
`;
export const FooterText2 = styled.div`
  font-size: 20px;
  margin: 1rem;
`;
export const FooterText = styled.div`
  margin: 3rem;
  height: 20rem;
  margin-bottom: 5rem;
`;

export const BasketWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem;
  margin-top: 10rem;
`;
export const Body = styled.div`
  padding-top: 10rem;
  width: 100%;
  margin: 0 auto;
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%; /* 버튼의 Y 위치를 SVG 중앙으로 조정 */
  left: 50%; /* 버튼의 X 위치를 SVG 중앙으로 조정 */
  transform: translate(-50%, -50%); /* 버튼을 중앙으로 이동 */
`;

export const ButtonWrapper2 = styled.div`
  position: absolute;
  top: 50%; /* 버튼의 Y 위치를 SVG 중앙으로 조정 */
  left: 50%; /* 버튼의 X 위치를 SVG 중앙으로 조정 */
  transform: translate(-50%, -50%); /* 버튼을 중앙으로 이동 */
`;

export const Button = styled.button`
  margin: 10px 0;
  width: fit-content;
  padding: 0.1rem;
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  font-size: 25px;
  background-color: #ffcc8d;
  margin-bottom: 3rem;
  &:disabled {
    background-color: gray;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
`;

export const SvgContainer2 = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const TextWrapper = styled.div`
  transform: translateX(-300px);
  padding-right: 10rem;
  font-weight: bolder;
`;
