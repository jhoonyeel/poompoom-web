import ReviewPostCard from '../../../../widgets/review-card/ui/ReviewCard.container';
import * as S from './MyReviewPanel.styles';

export default function MyReviewPanelUI({ latestPosts, handlePostClick }) {
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
}
