import './index.scss';

const Testimonial = ({ picture, heading, words }) => {
  return (
    <div className='testimonial'>
      <figure className='testimonial_image'></figure>
      <div className='testimonial_story'>
        <h3></h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
