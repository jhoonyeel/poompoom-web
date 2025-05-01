import { useState } from 'react';
import styled from 'styled-components';
import axios from '../../../../apis/axios';

const followUser = async (memberId) => {
  try {
    const response = await axios.post('/subscribe/add', { subscribdId: memberId });
    return response.data;
  } catch (error) {
    console.error('Failed to follow user:', error);
    throw error;
  }
};

// 팔로우 취소 요청
const unfollowUser = async (memberId) => {
  try {
    const response = await axios.post('/subscribe/cancel', { subscribdId: memberId });
    return response.data;
  } catch (error) {
    console.error('Failed to unfollow user:', error);
    throw error;
  }
};

export default function FollowButton({ memberId, initialFollow = false }) {
  const [isFollow, setIsFollow] = useState(initialFollow); // 개별 팔로우 상태 관리

  const handleFollow = async () => {
    try {
      if (isFollow) {
        // 팔로우 취소 요청
        await unfollowUser(memberId);
        setIsFollow(false);
      } else {
        // 팔로우 요청
        await followUser(memberId);
        setIsFollow(true);
      }
    } catch (error) {
      console.error('Failed to update follow status:', error);
    }
  };

  return (
    <>
      {isFollow ? (
        <FollowedBtn type="button" onClick={handleFollow}>
          팔로잉
        </FollowedBtn>
      ) : (
        <FollowBtn type="button" onClick={handleFollow}>
          팔로우
        </FollowBtn>
      )}
    </>
  );
}

const FollowBtn = styled.button`
  padding: 4px 6px;
  color: #024e46;
  font-size: 12px;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid #024e46;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #024e46;
  }
`;
const FollowedBtn = styled.button`
  padding: 4px 6px;
  color: #b0b0b0;
  font-size: 12px;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid #b0b0b0;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #b0b0b0;
  }
`;
