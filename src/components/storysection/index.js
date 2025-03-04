import './index.scss';
import Testimonial from '../testimonial';
import img1 from '../../assets/images/nat-8.jpg';
import img2 from '../../assets/images/nat-9.jpg';


const StorySection = () => {
  return (
    <div className='stories'>
      <Testimonial picture={img1} heading={'A Pretty Week end with my Family'} />
    </div>
  );
};

export default StorySection;
