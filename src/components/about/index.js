import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
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
          <div className='learn_more'>
            <label className='u_fill_over_button'>{'Learn More'}</label>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className='about_content_right'>Kanna</div>
      </div>
    </section>
  );
};
export default About;
