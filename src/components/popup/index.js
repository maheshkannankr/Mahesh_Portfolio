import './index.scss';
import Img1 from '../../assets/images/nat-9.jpg';
import Img2 from '../../assets/images/nat-10.jpg';

const Popup = () => {
  return (
    <div className='popup'>
      <div className='popup_content'>
        <div className='popup_left'>
          <img src={Img1} alt='Image 1' className='popup_left_photo' />
          <img src={Img2} alt='Image 2' className='popup_left_photo' />
        </div>
        <div className='popup_right'></div>
        Mahesh
      </div>
    </div>
  );
};

export default Popup;
