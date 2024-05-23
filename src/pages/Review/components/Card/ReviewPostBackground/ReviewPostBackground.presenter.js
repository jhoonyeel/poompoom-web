import * as S from './ReviewPostBackground.styles';
import ReviewPostPreview from '../ReviewPostPreview/ReviewPostPreview.container';

function ReviewPostBackgroundUI({ post, onPostClick, onMouseEnter, onMouseLeave, expanded, setIsExpanded }) {
  return (
    <div>
      <S.Button type="button" onClick={() => onPostClick(post)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src="http://via.placeholder.com/250x330.png" alt="Post 사진" /> {/* 320x450, 250x330, 220x300 */}
        <ReviewPostPreview expanded={expanded} setIsExpanded={setIsExpanded} />
      </S.Button>
    </div>
  );
}

export default ReviewPostBackgroundUI;
