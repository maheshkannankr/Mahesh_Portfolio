import './index.scss';

const TourCard = ({
  days = 1,
  maxStrength = 10,
  guidesCount = '1',
  sleepArea = 'Provided Tents',
  difficulty = 'Easy',
}) => {
  return (
    <div className='tour_card'>
      <div className='tour_card_side tour_card_side-front'>
        <div className='tour_card_side_img'></div>
        <div className='tour_card_side_details'>
          <label className='tour_card_side_details_label'>{`${days} day tour`}</label>
          <label className='tour_card_side_details_label'>{`Up to ${maxStrength} people`}</label>
          <label className='tour_card_side_details_label'>{`${guidesCount} tour guides`}</label>
          <label className='tour_card_side_details_label'>{`Sleep in ${sleepArea}`}</label>
          <label className='tour_card_side_details_label'>{`Difficulty: ${difficulty}`}</label>
        </div>
      </div>
      <div className='tour_card_side tour_card_side-back'>
        <h1>Mithil Yaazhan</h1>
      </div>
    </div>
  );
};

export default TourCard;
