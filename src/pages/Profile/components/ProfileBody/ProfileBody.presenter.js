import { useLocation } from 'react-router-dom';
import * as S from './ProfileBody.styles';
import LatestProfileGallery from '../section/LatestProfileGallery/LatestProfileGallery.container';
import MineProfileGallery from '../section/MineProfileGallery/MineProfileGallery.container';

export default function ProfileBodyUI() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <S.Container>
      <S.Content>{currentPath === '/profile/recent' && <LatestProfileGallery />}</S.Content>

      <S.Content>{currentPath === '/profile' && <MineProfileGallery />}</S.Content>

      <S.Content>{currentPath === '/profile/Like' && <MineProfileGallery />}</S.Content>

      <S.Content>{currentPath === '/profile/BookMark' && <MineProfileGallery />}</S.Content>
    </S.Container>
  );
}
