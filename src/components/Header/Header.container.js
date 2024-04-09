import HeaderUI from './Header.presenter';

function Header() {
  console.log('header');
  const name = 'asdf';
  return <HeaderUI name={name} />;
}

export default Header;
