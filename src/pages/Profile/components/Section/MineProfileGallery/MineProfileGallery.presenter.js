import ReviewPostCard from '../../../../Review/components/Card/ReviewPostCard/ReviewPostCard.container';
import * as S from './MineProfileGallery.styles';

export default function MineProfileGalleryUI({ latestPosts, handlePostClick }) {
  return (
    <S.Wrapper>
      <S.GalleryBody>
        <S.PostList>
          {latestPosts &&
            latestPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} onPostClick={handlePostClick} />)}
        </S.PostList>
      </S.GalleryBody>
    </S.Wrapper>
  );
}
