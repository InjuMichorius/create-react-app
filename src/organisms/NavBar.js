import logoImage from '../assets/images/logo.png';
import AvatarPreview from '../molecules/AvatarPreview';

function NavBar() {

  return (
    <nav className='nav-bar-container'>
        <img src={logoImage} alt="Logo" className="nav-bar-container__logo" />
        <AvatarPreview imageId={1} size={"small"} />
    </nav>
  );
}

export default NavBar;
