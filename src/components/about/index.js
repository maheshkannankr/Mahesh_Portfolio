import './index.scss';
import img1 from '../../assets/images/nat-1-large.jpg';
import img2 from '../../assets/images/nat-2-large.jpg';
import img3 from '../../assets/images/nat-3-large.jpg';
const About = () => {
  const contentHeadingPara = ({ heading }) => {
    return (
      <div className='about_content_left_content u_flex_column'>
        <h3 className='u_tertiary_heading'>{heading}</h3>
        <p className='u_content_para_text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    );
  };

  const aboutRightContent = () => {
    return (
      <div className='about_content_right'>
        <div className='about_content_right_main'>
          <img
            src={img1}
            alt='Photo 1'
            className='about_content_right_main_img about_content_right_main_img1'
          />
          <img
            src={img2}
            alt='Photo 2'
            className='about_content_right_main_img about_content_right_main_img2'
          />
          <img
            src={img3}
            alt='Photo 3'
            className='about_content_right_main_img about_content_right_main_img3'
          />
        </div>
      </div>
    );
  };

  return (
    <section className='about u_flex_column'>
      <h2 className='about_heading u_secondary_heading'>
        {'Exciting Tours for Adventurous People'}
      </h2>
      <div className='about_content '>
        <div className='about_content_left u_flex_column'>
          {contentHeadingPara({
            heading: 'Your are Going to Fall in love with Nature',
          })}
          {contentHeadingPara({
            heading: 'Live Adventures you have never before',
          })}

          <a href='#' className='u_fill_over_button about_learn_more'>
            {'Learn More '}&rarr;
          </a>
        </div>
        <div className='about_content_right'>{aboutRightContent()}</div>
      </div>
    </section>
  );
};
export default About;
