import React from 'react';
import styled from 'styled-components';

export default function DropDownOption({ items }) {
  return (
    <DropDownContainer>
      <ul>
        {items.map((item) => {
          const { label, onClick } = item;
          return (
            <DropDownItem key={label} onClick={onClick}>
              <Button>{label}</Button>
            </DropDownItem>
          );
        })}
      </ul>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  padding: 5px;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.37);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.37);
`;

const DropDownItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.gray_01};
  ${({ theme }) => theme.fonts.button_01};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  font-family: 'S-CoreDream-3Light';

  &:hover {
    background-color: #06564e;
    color: white;
  }
`;
