import ReviewPostCard from '../../../../Review/components/Card/ReviewPostCard/ReviewPostCard.container';
import ProfileHeader from '../../ProfileHeader/ProfileHeader.container';
import ProfileMenuBox from '../../ProfileMenuBox/ProfileMenuBox.container';
import * as S from './MineProfileGallery.styles';

export default function MineProfileGalleryUI({ latestPosts, handlePostClick }) {
  return (
    <S.Container>
      <ProfileHeader />
      <S.ProfileNev>
        <S.MenuBox>
          <ProfileMenuBox />
        </S.MenuBox>
      </S.ProfileNev>
      <S.GalleryBody>
        <S.PostList>
          {latestPosts &&
            latestPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} onPostClick={handlePostClick} />)}
        </S.PostList>{' '}
      </S.GalleryBody>
    </S.Container>
  );
}
