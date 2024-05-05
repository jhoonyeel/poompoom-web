import { useState } from 'react';
import styled from 'styled-components';

function CommunityWrite({ isEdit }) {
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onClickUpdate = () => {
    if (!content) setContentError('수정한 내용이 없습니다.');
    else {
      try {
        // eslint-disable-next-line no-unreachable, no-shadow
      } catch (err) {
        if (err) {
          setError(err.message);
        }
      }
    }
  };

  const onClickSubmit = () => {
    if (!content) setContentError('내용을 입력해 주세요');
    else {
      try {
        setIsActive(true);
        // create & 상세페이지로 이동
      } catch (err) {
        // 버튼 활성화
        // eslint-disable-next-line no-alert
        if (err) setError(err.message);
      }
    }
  };
  return (
    <Wrapper>
      <Title>{isEdit ? '게시글 수정' : '게시글 등록'}</Title>
      <Content placeholder="내용을 입력해 주세요" onChange={onChangeContent} />
      <Error>{contentError}</Error>
      <Error>{error}</Error>
      <SubmitBtn onClick={isEdit ? onClickUpdate : onClickSubmit} isActive={isEdit ? true : isActive}>
        {isEdit ? '게시글 수정하기' : '게시글 등록하기'}
      </SubmitBtn>
    </Wrapper>
  );
  // 커뮤니티 글 등록 후 수정 가능하게 할건지?!
}
export default CommunityWrite;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 3rem;
  height: 2rem;
`;

const Content = styled.textarea`
  width: 20rem;
  height: 10rem;
  resize: none;
`;

const SubmitBtn = styled.button`
  width: 6rem;
  height: 2rem;
`;

const Error = styled.div`
  color: red;
  font-size: 0.5rem;
`;
