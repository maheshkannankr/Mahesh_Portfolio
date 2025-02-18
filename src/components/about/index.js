import './index.scss';
const About = () => {
  return (
    <section className='about'>
      <h2 className='about_heading u_secondary_heading'>
        {'Exciting Tours for Adventurous People'}
      </h2>
      <div className='about_content'>
        <div className='about_content_left'>
          <div className='about_content_left_first'>
            <h3 className='about_content_left_first_heading u_tertiary_heading'>
              {'Your are Going to Fall in love with Nature'}
            </h3>
            <p className='about_content_left_first_para'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className='about_content_left_second'>
            <h3 className='about_content_left_second_heading u_tertiary_heading'>
              {'Live Adventures you have never before'}
            </h3>
            <p className='about_content_left_second_para'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className='about_content_right'>Kanna</div>
      </div>
    </section>
  );
};
export default About;
