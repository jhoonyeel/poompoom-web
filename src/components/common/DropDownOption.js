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
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 10;
  width: max-content;
`;

const DropDownItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: #f0f0f0;
  }
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

  &:hover {
    background-color: #e6e6e6;
  }
`;
