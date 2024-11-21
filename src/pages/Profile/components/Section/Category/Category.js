import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as EmptyCategory } from '../../../../../assets/BookMark/Category.svg';

import { ReactComponent as Folder } from '../../../../../assets/BookMark/Folder.svg';

export default function Category() {
  const [category, setCategory] = useState([]);
  const [editCategory, setEditCategory] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const token = localStorage.getItem('accessToken');
  const handleGetCategories = async () => {
    try {
      const response = await axios.get('/category');
      console.log('내 카테고리 조회 결과:', response.data);
      setIsVisible(true);
    } catch (error) {
      console.error('카테고리 조회 오류:', error);
    }
  };

  const handleCreateCategory = async () => {
    try {
      const response = await axios.post(
        '/category/create',
        {
          categoryName: '2 카테고리',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCategory(response.data);

      console.log('카테고리 생성 결과:', category);
    } catch (error) {
      console.error('카테고리 생성 오류:', error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      const categoryId = 1;
      await axios.post(`/category/delete/${categoryId}`);
      console.log('카테고리 삭제 완료');
    } catch (error) {
      console.error('카테고리 삭제 오류:', error);
    }
  };

  const handleUpdateCategory = async () => {
    try {
      const response = await axios.post('/category/update', {
        categoryId: 1,
        updateName: '수정된 카테고리 이름',
      });
      console.log('카테고리 수정 완료:', response.data);
    } catch (error) {
      console.error('카테고리 수정 오류:', error);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);
  return (
    <CategoryContainer>
      <button type="button" onClick={handleGetCategories}>
        내 카테고리 조회
      </button>
      <button type="button" onClick={handleCreateCategory}>
        카테고리 생성
      </button>
      <button type="button" onClick={handleDeleteCategory}>
        카테고리 삭제
      </button>
      <button type="button" onClick={handleUpdateCategory}>
        카테고리 수정
      </button>
      {Category ? (
        <emptyCategoryWrapper onClick={handleCreateCategory}>
          <EmptyCategory />
        </emptyCategoryWrapper>
      ) : (
        <FillCategory>
          <Folder />
        </FillCategory>
      )}
      {isVisible && (
        <CategoryModal>
          <Input type="text" value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
        </CategoryModal>
      )}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div``;

const FillCategory = styled.div``;

const CategoryModal = styled.div``;

const Input = styled.div``;
