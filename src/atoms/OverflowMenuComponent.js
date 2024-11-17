import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Delete } from '../assets/Delete.svg';
import { ReactComponent as Edit } from '../assets/Edit.svg';
import { ReactComponent as OverflowMenu } from '../assets/OverflowMenu.svg';

export default function OverflowMenuComponent({ onUpdate, onDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation(); // 이벤트 버블링을 막아 클릭 이벤트가 부모 요소로 전달되지 않도록 함
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <Wrapper onClick={toggleMenu}>
      <OverflowMenuIcon />
      {isMenuOpen && (
        <MenuList ref={menuRef}>
          <MenuItem onClick={onUpdate}>
            <MenuText>수정하기</MenuText>
            <EditIcon />
          </MenuItem>
          <MenuItem onClick={onDelete}>
            <MenuText>삭제</MenuText>
            <DeleteIcon />
          </MenuItem>
        </MenuList>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const OverflowMenuIcon = styled(OverflowMenu)`
  width: 4px;
  height: 100%;
`;
const MenuList = styled.div`
  position: absolute;
  top: 100%;
  right: 0px;
  width: 180px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #126056;
    color: #fff;
  }
`;
const MenuText = styled.span`
  flex: 1;
  text-align: left;
  font-size: 18px;
`;
const EditIcon = styled(Edit)`
  width: 20px;
  height: 100%;
`;
const DeleteIcon = styled(Delete)`
  width: 20px;
  height: 100%;
`;
