import React from 'react';
import axios from 'axios';

export default function Category() {
  const token = 'your-jwt-token'; // JWT 토큰 (적절히 설정)

  const apiClient = axios.create({
    baseURL: '/api/category', // API 기본 경로
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const handleGetCategories = async () => {
    try {
      const response = await apiClient.get('/');
      console.log('내 카테고리 조회 결과:', response.data);
    } catch (error) {
      console.error('카테고리 조회 오류:', error);
    }
  };

  const handleCreateCategory = async () => {
    try {
      const response = await apiClient.post('/create', {
        categoryName: '새 카테고리 이름',
      });
      console.log('카테고리 생성 결과:', response.data);
    } catch (error) {
      console.error('카테고리 생성 오류:', error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      const categoryId = 1; // 삭제할 카테고리 ID
      await apiClient.post(`/delete/${categoryId}`);
      console.log('카테고리 삭제 완료');
    } catch (error) {
      console.error('카테고리 삭제 오류:', error);
    }
  };

  const handleUpdateCategory = async () => {
    try {
      const response = await apiClient.post('/update', {
        categoryId: 1, // 수정할 카테고리 ID
        updateName: '수정된 카테고리 이름',
      });
      console.log('카테고리 수정 완료:', response.data);
    } catch (error) {
      console.error('카테고리 수정 오류:', error);
    }
  };

  return (
    <div>
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
    </div>
  );
}
