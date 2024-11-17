import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigatePath } from '../../../hooks/useNavigatePath';
import { nicknameState } from '../../../recoil/atoms';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

export default function ReviewPostAuthor({ profilePhoto, nickname, reviewType, isContentHovered }) {
  const currentNickname = useRecoilValue(nicknameState); // 현재 로그인된 사용자의 닉네임
  const [isFollow, setIsFollow] = useState(false);
  const handleFollow = () => {
    setIsFollow((follow) => !follow);
  };

  const navigatePath = useNavigatePath();

  return (
    <ReviewPostAuthorUI
      profilePhoto={profilePhoto}
      nickname={nickname}
      reviewType={reviewType}
      isContentHovered={isContentHovered}
      currentNickname={currentNickname}
      isFollow={isFollow}
      handleFollow={handleFollow}
      navigatePath={navigatePath}
    />
  );
}
