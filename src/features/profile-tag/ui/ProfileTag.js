import styled from 'styled-components';
import { useNavigatePath } from '../../../shared/hooks/useNavigatePath';

export default function ProfileTag() {
  const navigatePath = useNavigatePath();

  return (
    <>
      <HeaderText>Profile-Tag</HeaderText>
      <InputWrapper>
        <TagButton onClick={navigatePath('/signup/tag')}>프로필 태그 선택</TagButton>
        <TagText>태그를 먼저 선택해주세요!</TagText>
      </InputWrapper>
    </>
  );
}

const HeaderText = styled.div`
  height: 3rem;
  font-size: 2rem;
  margin: 0;
  padding: 4rem 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TagButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.8rem;
  border-radius: 2px;
  border: 1px solid #000;
`;
const TagText = styled.div`
  margin-left: 1rem;
  font-size: 1.3rem;
`;
