import styled from 'styled-components';

export const SidebarTitle = styled.div`
  color: #4f4f4f;
  font-size: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;

export const PlusButton = styled.button`
  background-color: #e8e8e8;
  color: #4f4f4f;
  font-size: 25px;
  border-radius: 50px;
  width: 22px;
  height: 22px;
  border: none;
  text-align: center;
  line-height: 22px;
  margin: auto;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 7%;
  ${(props) => (props.children === '<' ? 'left: 30px;' : 'right: 30px;')}
  transform: translateY(-50%);
`;

export const SectionWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
  border-radius: 8px;
`;

export const Section = styled.div`
  padding: 10px;
  gap: 10px;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
