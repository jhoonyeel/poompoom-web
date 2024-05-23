import * as S from './ReviewPostPreview.styles';

function ReviewPostPreviewUI({ expanded, setIsExpanded }) {
  const onMouseEnter = () => {
    setIsExpanded(true);
  };

  // preview 깜빡임 현상 제거
  return (
    <div>
      {expanded && (
        <S.Box onMouseEnter={onMouseEnter}>
          <p>본문 내용입니다. </p>
          <p>추가적인 내용</p>
        </S.Box>
      )}
    </div>
  );
}

export default ReviewPostPreviewUI;
