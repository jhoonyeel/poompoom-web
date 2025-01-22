import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './Mating.Styled';

export default function MatingModal({ closeModal, isMatingOpen }) {
  const [username, setUsername] = useState('');
  const [requests, setRequests] = useState('');
  const [message, setMessage] = useState('');
  const [isMate, setIsMating] = useState(false);
  const AccessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchMatingRequests = async () => {
      try {
        const response = await axios.get('/mating', {
          headers: { Authorization: `Bearer ${AccessToken}` },
        });
        setRequests(response.data.mateId);
        console.log('연인신청현황.:', response.data);

        let Status = '';
        if (response.data.status === 'OFFER') {
          Status = '연인 맺기 요청이 들어왔습니다.';
        } else if (response.data.status === 'MATING') {
          setIsMating(true);
          Status = '연인 맺기가 완료된 상태입니다.';
        }
        setMessage(` ${Status} 메이트 아이디${response.data.mateId}번`);
      } catch (error) {
        if (error.response) {
          // 서버 응답 반환
          console.error('확인 에러:', error.response);
          setMessage(error.response?.data.message);
        } else if (error.request) {
          // 서버에 요청 전송 후 응답 없음
          console.error('확인 응답 없음:', error.request);
          setMessage('서버 응답이 없습니다. 나중에 다시 시도해주세요.');
        } else {
          // 요청 중 에러가 발생
          console.error('요청 설정 에러:', error.message);
          setMessage('요청을 처리하는 중 문제가 발생했습니다.');
        }
      }
    };

    fetchMatingRequests();
  }, []);

  // 연인 신청 보내기
  const handleCreateRequest = async () => {
    try {
      const response = await axios.post(
        '/mating/create',
        { username },
        {
          headers: { Authorization: `${AccessToken}` },
        },
      );
      alert('연인 신청이 성공적으로 보내졌습니다.');
      setUsername('');
      console.log('신청 성공:', response.data);
    } catch (error) {
      if (error.response) {
        alert(`신청 실패: ${error.response?.data.message || '알 수 없는 에러'}`);
      } else if (error.request) {
        alert('서버 응답이 없습니다. 나중에 다시 시도해주세요.');
      }
    }
  };

  const handleAcceptRequest = async (matingId) => {
    try {
      const response = await axios.post(
        '/mating/accept',
        { matingId },
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        },
      );
      alert('연인 신청이 수락되었습니다.');
      console.log('수락:', response.data);
    } catch {
      alert('연인 신청 수락에 실패했습니다.');
    }
  };

  const handleRejectRequest = async (matingId) => {
    try {
      const response = await axios.post(
        '/mating/reject',
        { matingId },
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        },
      );
      alert('연인 신청이 거절되었습니다.');
      console.log('거절:', response.data);
    } catch {
      alert('연인 신청 거절에 실패했습니다.');
    }
  };

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    isMatingOpen && (
      <S.BackDrop onClick={handleBackDropClick}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <S.Title>연인 신청 현황</S.Title>
          {message && <div style={{ color: 'red', margin: '40px' }}>{message}</div>}
          {!isMate && (
            <div>
              <S.Title>연인 신청</S.Title>
              <input
                type="text"
                placeholder="연인 신청할 상대의 아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <S.Button onClick={handleCreateRequest}>연인 신청</S.Button>

              <S.Button onClick={() => handleAcceptRequest(requests)}>수락</S.Button>

              <S.RejectButton onClick={() => handleRejectRequest(requests)}>거절</S.RejectButton>
            </div>
          )}
          <S.Button onClick={closeModal}>닫기</S.Button>
        </S.ModalContainer>
      </S.BackDrop>
    )
  );
}
