import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/PoomPoom.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  min-width: 1028px;
  width: 80%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #a3a3a3;
  }
`;
export const LogoIcon = styled(Logo)`
  width: 155px; // SVG는 자동으로 비율을 맞춰서 height를 조절함. height, object-fit은 불필요.
  height: 100%; /* header의 높이를 넢어가기에 높이 명시 */
`;
export const RightBox = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LoverImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow:
    0px 4px 6px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;
export const LoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
  user-select: none;
`;

export const MenuBar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
  height: 100%;
  text-align: start;
`;
export const MenuItem = styled.li`
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  position: relative;
  color: #072623;

  &:hover {
    color: #c52c27;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background-color: #c52c27;
      border-radius: 50%;
    }
  }
`;
