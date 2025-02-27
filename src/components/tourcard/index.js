import './index.scss';
import HoverExpandButton from '../hoverexpandbutton';

const TourCard = ({
  days = 1,
  maxStrength = 10,
  guidesCount = '1',
  sleepArea = 'Provided Tents',
  difficulty = 'Easy',
  title1 = '',
  title2 = '',
  price = 0,
  primaryColor = '',
  secondaryColor = '',
  bgImage = '',
  imgGradientPrimary = '',
  imgGradientSecondary = '',
}) => {
  console.log(bgImage);
  return (
    <div className='tour_card'>
      <div className='tour_card_side tour_card_side-front'>
        <div
          className='tour_card_side_img'
          style={{
            backgroundImage: `linear-gradient(to right bottom,${imgGradientPrimary}, ${imgGradientSecondary}), url(${bgImage})`,
          }}
        >
          <h1
            className='tour_card_side_img_title1'
            style={{
              backgroundImage: `linear-gradient(to right bottom,${primaryColor}, ${secondaryColor})`,
            }}
          >
            {title1}
          </h1>
          <h1
            className='tour_card_side_img_title2'
            style={{
              backgroundImage: `linear-gradient(to right bottom, ${primaryColor}, ${secondaryColor})`,
            }}
          >
            {title2}
          </h1>
        </div>
        <div className='tour_card_side_details'>
          <label className='tour_card_side_details_label'>{`${days} day tour`}</label>
          <label className='tour_card_side_details_label'>{`Up to ${maxStrength} people`}</label>
          <label className='tour_card_side_details_label'>{`${guidesCount} tour guides`}</label>
          <label className='tour_card_side_details_label'>{`Sleep in ${sleepArea}`}</label>
          <label className='tour_card_side_details_label'>{`Difficulty: ${difficulty}`}</label>
        </div>
      </div>
      <div
        className='tour_card_side tour_card_side_back'
        style={{
          backgroundImage: `linear-gradient(to right bottom,${primaryColor}, ${secondaryColor})`,
        }}
      >
        <div className='tour_card_side_back_price'>
          <span className='tour_card_side_back_price_only_text'>Only</span>
          <span className='tour_card_side_back_price_text'>{`$ ${price}`}</span>
        </div>
        <div className='tour_card_side_back_button'>
          <HoverExpandButton text='Book Now!' />
        </div>
      </div>
    </div>
  );
};

export default TourCard;
