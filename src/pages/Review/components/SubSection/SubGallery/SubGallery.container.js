import { useState } from 'react';
import SubGalleryUI from './SubGallery.presenter';
import useModal from '../../../../../hooks/useModal';

function SubGallery() {
  const [selectedPost, setSelectedPost] = useState(null);
  const { isOpen: isModalOpen, openModal, closeModal } = useModal(); // useModal 훅 사용

  const currentPosts = [1, 2];
  // 페이지 별 props로 넘겨주는 data 변경 (useRouter, useLocation 사용)
  console.log(`currentPosts: ${currentPosts}`);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    openModal(); // 모달 열기 함수 호출
  };

  const handleConfirmPost = (post) => {
    /**
     * 여기서 포스트 확인 동작을 수행하거나 추가적인 로직을 수행할 수 있습니다.
     * 포스트를 서버에 저장하거나 업데이트합니다.
     * 포스트를 삭제합니다.
     * 포스트에 대한 추가적인 정보를 보여줍니다.
     * 모달이 아닌 다른 UI 요소를 업데이트합니다.
     */
    console.log('포스트 확인:', post.title);
  };

  return (
    <SubGalleryUI
      currentPosts={currentPosts}
      handlePostClick={handlePostClick}
      handleConfirmPost={handleConfirmPost}
      selectedPost={selectedPost}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
}

export default SubGallery;
