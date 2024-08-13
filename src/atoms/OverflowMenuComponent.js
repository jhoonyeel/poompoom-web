import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function OverflowMenuComponent() {
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
      <FontAwesomeIcon icon={faEllipsisVertical} />
      {isMenuOpen && (
        <MenuBox ref={menuRef}>
          <Item>
            <Span>수정하기</Span>
            <img alt="이미지" />
          </Item>
          <Item>
            <Span>삭제</Span>
            <img alt="이미지" />
          </Item>
        </MenuBox>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuBox = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  width: 200px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.85);
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
`;

const Item = styled.div`
  display: flex;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #126056;
    color: white;
  }
`;

const Span = styled.span`
  flex: 1;
  text-align: left;
`;
