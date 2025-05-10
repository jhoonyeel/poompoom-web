import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function ItemDropdown({ selectedItem, setSelectedItem }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const itemOptions = ['가전/디지털', '뷰티', '생활용품', '스포츠/건강', '식품', '여행', '패션/잡화', '문구/오피스'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', closeDropdown);
    } else {
      document.removeEventListener('mousedown', closeDropdown);
    }

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, [dropdownOpen]);

  return (
    <Dropdown ref={dropdownRef} onClick={toggleDropdown}>
      <ItemText>{selectedItem}</ItemText>
      {dropdownOpen && (
        <DropdownMenu>
          {itemOptions.map((item) => (
            <DropdownItem key={item} onClick={() => handleItemClick(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Dropdown>
  );
}

const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 120px;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ItemText = styled.span`
  font-size: 20px;
  user-select: none;
  outline: none;
`;
