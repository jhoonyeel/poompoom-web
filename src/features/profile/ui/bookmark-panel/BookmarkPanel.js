import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyCategory } from '../../assets/Category.svg';

const BookmarkPanel = () => {
  const [category, setCategory] = useState([]);
  const [editCategory, setEditCategory] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const token = localStorage.getItem('accessToken');

  const handleGetCategories = async () => {
    try {
      const response = await axios.get('/category');
      console.log('내 카테고리 조회 결과:', response.data);
      setCategory(response.data);
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

      setCategory((prev) => [...prev, response.data]);
      console.log('카테고리 생성 결과:', response.data);
    } catch (error) {
      console.error('카테고리 생성 오류:', error);
    }
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <CategoryContainer>
      <button type="button" onClick={handleGetCategories}>
        내 카테고리 조회
      </button>
      <button type="button" onClick={() => handleOpenModal()}>
        카테고리 생성
      </button>

      {category.length > 0 ? (
        <emptyCategoryWrapper onClick={() => handleOpenModal()}>
          <EmptyCategory />
        </emptyCategoryWrapper>
      ) : (
        <emptyCategoryWrapper onClick={() => handleOpenModal()}>
          <EmptyCategory />
        </emptyCategoryWrapper>
      )}

      {isVisible && (
        <>
          <Input
            type="text"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            placeholder="카테고리 이름 입력"
          />
          <button type="button" onClick={handleCreateCategory}>
            카테고리 생성
          </button>
          <button type="button" onClick={() => setIsVisible(false)}>
            취소
          </button>
        </>
      )}
    </CategoryContainer>
  );
};

export default BookmarkPanel;

const CategoryContainer = styled.div``;

const Input = styled.div``;
