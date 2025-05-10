import ReviewPostCard from '../../../../../widgets/review-card/ui/ReviewPostCard.container';
import * as S from './LatestProfileGallery.styles';

export default function LatestProfileGalleryUI({ latestPosts, handlePostClick }) {
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
