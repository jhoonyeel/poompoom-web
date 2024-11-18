import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as EmptyProfileImg } from '../../../assets/EmptyProfile/EmptyProfileComment.svg';
import * as S from './Comment.style';

import { useDeleteComment } from '../../../hooks/CommentApis/useDeleteComment';

import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { MODAL_MESSAGE } from '../../../constants/CommentModalState';
import useModal from '../../../hooks/useModal';
import ConfirmModal from '../../common/ConfirmModal';
import DropDownOption from '../../common/DropDownOption';
import PinComment from '../subComponents/PinComment';
import LikeComment from '../subComponents/LikeComment';
import EditComment from '../subComponents/EditComment';

export function Comment({ comment, convertDateArrayToDate, reviewId }) {
  const { delete: deleteMessage, report } = MODAL_MESSAGE;
  const { isOpen, openModal, closeModal } = useModal();
  const { ref, isVisible, setIsVisible } = useOutsideClick();
  const { body, commentId, createDate, isfixed: isFixed, likeCount, isLiked, commentedMember } = comment;

  const { nickName, profileImagePath, memberId } = commentedMember;

  const [confirmHandler, setConfirmHandler] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  const localMemberId = userData.memberId;
  const isCommenter = memberId === localMemberId;

  const handleOptionClick = (handler, optionLabel) => {
    setConfirmHandler(() => handler);
    setSelectedOption(optionLabel);
    openModal();
  };

  const handleDeleteComment = async () => {
    await useDeleteComment(commentId, reviewId, closeModal);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <S.CommentContainer isFixed={isFixed}>
      <CommentHeader>
        <ProfileImgWrapper>
          {profileImagePath ? <UserProfile src={profileImagePath} alt="프로필 사진" /> : <EmptyProfile />}
        </ProfileImgWrapper>

        <UserContainer>
          <UserWrapper>
            <Id>{nickName}</Id> <PinComment isFixed={isFixed} commentId={commentId} reviewId={reviewId} />
          </UserWrapper>

          <CommentDate>{convertDateArrayToDate(createDate).toLocaleString()}작성</CommentDate>
        </UserContainer>

        <CommentOption />
      </CommentHeader>
      <EditComment
        body={body}
        commentId={commentId}
        reviewId={reviewId}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <CommentIcon>
        <OptionButton
          icon={faBars}
          ref={ref}
          onClick={() => {
            setIsVisible((state) => !state);
          }}
        />

        <LikeComment
          likeCount={likeCount}
          isCommenter={isCommenter}
          reviewId={reviewId}
          commentId={commentId}
          isLiked={isLiked}
        />
        <OptionContainer>
          {isVisible && (
            <DropDownOption
              items={
                isCommenter
                  ? [
                      { label: '삭제하기', onClick: () => handleOptionClick(handleDeleteComment, deleteMessage) },
                      { label: '수정하기', onClick: handleEditClick },
                    ]
                  : [{ label: '신고하기', onClick: () => handleOptionClick(null, report) }]
              }
            />
          )}
        </OptionContainer>
      </CommentIcon>
      <ConfirmModal
        isOpen={isOpen}
        closeModal={closeModal}
        onConfirm={confirmHandler}
        ModalMessage={`${selectedOption}하시겠습니까?`}
      />
    </S.CommentContainer>
  );
}

const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin-right: 150px;
  margin-bottom: 15px;
`;

const CommentIcon = styled.div`
  cursor: pointer;
`;

const EmptyProfile = styled(EmptyProfileImg)``;

const UserProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const ProfileImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: -2%;
  left: -2%;
`;
const Id = styled.div`
  font-size: 20px;
`;
const CommentOption = styled.div``;
const CommentDate = styled.div`
  font-size: 10px;
`;

const OptionButton = styled(FontAwesomeIcon)`
  position: absolute;
  color: '#655f48';
  top: 28px;
  right: 30px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  color: rgb(54, 54, 54);
  font-size: 12px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 28px;
  right: 25px;
`;
