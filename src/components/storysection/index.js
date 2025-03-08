import './index.scss';
import Testimonial from '../testimonial';
import img1 from '../../assets/images/nat-8.jpg';
import img2 from '../../assets/images/nat-9.jpg';
// import mp4videoSrc from '../../assets/images/video.mp4';
// import video2 from '../../assets/images/video.webm';

const StorySection = () => {
  const mp4videoSrc = new URL('../../assets/images/video.mp4', import.meta.url)
    .href;
  return (
    <div className='stories'>
      <video className='stories_bg_video' autoPlay muted loop>
        <source src={mp4videoSrc} type='video/mp4' />
        <source src='../../assets/images/video.webm' type='video/webm' />
        Your browser is not supported
      </video>
      <div className='stories_content'>
        <h1 className='tours_heading u_secondary_heading'>
          {'We Make People Happy'}
        </h1>
        <Testimonial
          name='Mahesh Kannan'
          picture={img1}
          heading={'Had a good Week end with my Family'}
        />
        <Testimonial
          name='Mithil Yaazhan'
          picture={img2}
          heading={'My weekend planing is comletelty Worry free'}
        />
        <a href='#' className='u_fill_over_button about_learn_more'>
          {'Read All Stories '}&rarr;
        </a>
      </div>
    </div>
  );
};

export default StorySection;
