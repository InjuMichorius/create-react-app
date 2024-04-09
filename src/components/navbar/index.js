import ProfileImage from './components/profileImage';
import logoImage from '../../assets/images/logo.png';

function NavBar() {

  return (
    <nav className='nav-bar-container'>
        <img src={logoImage} alt="Logo" className="nav-bar-container__logo" />
        <ProfileImage/>
    </nav>
  );
}

export default NavBar;
