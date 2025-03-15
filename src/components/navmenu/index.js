import './index.scss';

const NavMenu = () => {
  return (
    <div className='navigation'>
      <input type='checkbox' className='navigation_checkbox' id='navi_toggle' />
      <label htmlFor='navi_toggle' className='navigation_button'>
        <span className='navigation_button_icon' />
      </label>
      <div className='navigation_background'>&nbsp;</div>
      <nav className='navigation_nav'>
        <ul className='navigation_nav_list'>
          <li className='navigation_nav_item'>
            <a href='#' className='navigation_nav_item_link'>
              <span>01</span>
              About Natours
            </a>
          </li>
          <li className='navigation_nav_item'>
            <a href='#' className='navigation_nav_item_link'>
              <span>02</span>
              Your Benfits
            </a>
          </li>
          <li className='navigation_nav_item'>
            <a href='#' className='navigation_nav_item_link'>
              <span>03</span>
              Popular Tours
            </a>
          </li>
          <li className='navigation_nav_item'>
            <a href='#' className='navigation_nav_item_link'>
              <span>04</span>
              Stories
            </a>
          </li>
          <li className='navigation_nav_item'>
            <a href='#' className='navigation_nav_item_link'>
              <span>05</span>
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
