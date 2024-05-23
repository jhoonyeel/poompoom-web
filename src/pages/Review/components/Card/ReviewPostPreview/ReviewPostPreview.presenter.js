import * as S from './ReviewPostPreview.styles';

export default function ReviewPostPreviewUI({ isHovered, setIsHovered }) {
  const onMouseEnter = () => {
    setIsHovered(true);
  };

  // preview 깜빡임 현상 제거
  return (
    <div>
      {isHovered && (
        <S.Box onMouseEnter={onMouseEnter}>
          <p>본문 내용입니다. </p>
          <p>추가적인 내용</p>
        </S.Box>
      )}
    </div>
  );
}
