import './index.scss';
import logo from '../../assets/images/logo-white.png';
import HoverExpandButton from '../hoverexpandbutton';
const Header = () => {
  return (
    <header className='header'>
      <div className='header_logo'>
        <img src={logo} alt='Logo' className='header_logo_img' />
      </div>
      <div className='header_heading'>
        <h1 className='header_heading_primary_text'>{'outdoors'}</h1>
        <h1 className='header_heading_secondary_text'>
          {'is where life happens'}
        </h1>
        <HoverExpandButton text='Discover our tours' />
      </div>
    </header>
  );
};
export default Header;
