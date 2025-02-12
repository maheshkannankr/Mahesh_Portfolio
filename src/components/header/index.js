import './index.css';
import logo from '../../assets/images/logo-white.png';
const Header = () => {
  return (
    <header>
      <div className='h_logo_container'>
        <img src={logo} alt='Logo' className='h_logo_img' />
      </div>
      <div className='h_heading_container'>
        <h1 className='h_primary_heading_text'>{'outdoors'}</h1>
        <h1 className='h_secondary_heading_text'>{'is where life happens'}</h1>
      </div>
    </header>
  );
};
export default Header;
