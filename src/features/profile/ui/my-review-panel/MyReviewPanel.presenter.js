import ReviewPostCard from '@widgets/review-card/ui/ReviewCard.container.js';
import * as S from './MyReviewPanel.styles.js';

const MyReviewPanelUI = ({ latestPosts, handlePostClick }) => {
  return (
    <S.Wrapper>
      <S.GalleryBody>
        <S.PostList>
          {latestPosts &&
            latestPosts.map((post, index) => (
              <ReviewPostCard key={`${post.reviewId}-${index}`} post={post} onPostClick={handlePostClick} />
            ))}
        </S.PostList>
      </S.GalleryBody>
    </S.Wrapper>
  );
};

export default MyReviewPanelUI;
