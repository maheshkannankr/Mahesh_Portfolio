import './index.scss';

const Testimonial = ({ name = '', picture = '', heading = '', words = '' }) => {
  return (
    <div className='testimonial'>
      <figure className='testimonial_image'>
        <img className='testimonial_image_img' src={picture} alt='Person' />
        <figcaption className='testimonial_image_caption'>{name}</figcaption>
      </figure>
      <div className='testimonial_story'>
        <label className='testimonial_story_heading'>{heading}</label>
        <p className='testimonial_story_words'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum ill be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem Ipsum ent of a page when looking at its layout. The point of
          using Lorem Ipsum ill be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
