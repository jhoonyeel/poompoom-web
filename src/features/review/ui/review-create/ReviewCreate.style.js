import styled from 'styled-components';
import { ReactComponent as Add } from '../../../../shared/assets/Add.svg';
import { ReactComponent as CategorySelect } from '../../../../shared/assets/CategorySelect.svg';

export const Wrapper = styled.div`
  margin: 24px auto 0;
  min-width: 1028px;
  width: 80%;
`;
export const ReviewCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 580px;
  border-radius: 20px;
  background: #072623;
  box-shadow:
    0px 4px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 80px #022622;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 12px 0;
`;
export const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const SubmitBtn = styled.button`
  padding: 0 20px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const ReviewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 5;
`;
export const ReviewImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ImageInput = styled.input`
  display: none;
`;
export const ArrowLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  user-select: none;
  cursor: pointer;
`;
export const ArrowRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  user-select: none;
  cursor: pointer;
`;
export const Dots = styled.div`
  display: flex;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;
export const Dot = styled.div`
  margin: 0 4px;
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  transition: background-color 0.3s;
  user-select: none;
  pointer-events: auto; // Dot이 클릭 가능하도록 설정
  cursor: pointer;
`;
export const AddIcon = styled(Add)`
  width: 32px;
  height: 32px;
`;
export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  transition: background-color 0.3s ease-in-out;
  border-radius: 50%;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export const ReviewContentContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding: 16px 30px 10px;
`;
export const ReviewContentHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const AuthorCircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
`;
export const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Nickname = styled.span`
  font-family: 'seolleimcool-SemiBold';
  flex: 1;
  text-align: start;
  color: #fff;
  font-size: 28px;
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;
export const ReviewTypeBtn = styled.button`
  padding: 4px 12px;
  background-color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.25)' : 'inherit')};
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  &:first-of-type {
    margin-right: 10px;
  }
`;
export const ReviewContent = styled.textarea`
  flex: 1;
  margin-top: 16px;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 0;
  border-radius: 20px;
  font-size: 24px;
  color: #ffffff;
  background-color: #072623;
  resize: none;
  outline: none;
  transition: all 0.3s ease-in-out;
  font-family: 'TAEBAEKmilkyway';
  line-height: 1.6;

  &:focus {
    background-color: #154d47;
  }
`;

export const ReviewInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const CategoryTitle = styled.div`
  font-size: 16px;
  color: #fff;
`;
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  margin-top: 5px;
`;
export const CategoryBtn = styled.button`
  padding: 10px;
  background-color: #022622;
  border: none;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease;
  color: ${({ $active }) => ($active ? '#ffffff' : '#969696')};
  font-size: 18px;
  cursor: pointer;
  font-family: 'S-CoreDream-3Light';

  &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    color: #ffffff;
    font-weight: 600;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }
`;
export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:nth-of-type(3) {
    margin-bottom: 20px;
  }
`;
export const CategorySelectIcon = styled(CategorySelect)`
  width: 26px;
  height: 100%;
  stroke: #fff;
`;
export const InfoTitle = styled.span`
  font-size: 16px;
  color: #fff;
  min-width: 120px;
`;
export const InfoInput = styled.input`
  font-size: 16px;
  padding: 8px;

  flex: 1;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  background-color: #0d423d;
  resize: none;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    background-color: #154d47;
  }
`;

export const Line = styled.hr`
  margin: 10px 0;
`;

export const HeaderLine = styled.hr`
  margin-top: 10px;
`;
