import './index.scss';
import logo from '../../assets/images/logo-green-2x.png';

const Footer = () => {
  return (
    <footer className='footer_section'>
      <div className='footer_logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='footer_details'>
        <ul className='footer_details_links'>
          <li className='footer_details_links_item'>Company</li>
          <li className='footer_details_links_item'>Contact Us</li>
          <li className='footer_details_links_item'>Carrers</li>
          <li className='footer_details_links_item'>Privacy Policy</li>
          <li className='footer_details_links_item'>Terms</li>
        </ul>
        <p className='footer_details_copyright'>
          Built by
          <span className='footer_details_copyright_highlight'>
            &nbsp;<b>Mahesh Kannan</b>
            &nbsp;
          </span>
          for study purpose by refering Advanced CSS and SASS by JONAS
          SCHMEDTMANN in Udemy, You are allowed to use this webpage for both
          personal and commercial use, but not to claim it as your own design, A
          credit to the original authour, Jonas Schmedtmann, is of course always
          appreciated. Copyright &copy; by Mahesh Kannan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
