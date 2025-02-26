import './index.scss';
import TourCard from '../tourcard';

const Tours = () => {
  return (
    <div className='tours'>
      <TourCard
        days={3}
        difficulty='very easy'
        guidesCount={2}
        maxStrength={30}
        sleepArea='Cozy Hostels'
        title1='the sea '
        title2='explorer'
        price={497}
        primaryColor='$color_blue_light'
        secondaryColor='$color_blue_dark'
      />
      <TourCard
        days={7}
        difficulty='medium'
        guidesCount={6}
        maxStrength={40}
        sleepArea='Provided Tents'
        title1='the forest '
        title2='hiker'
        price={697}
        primaryColor='rgb(35, 35, 255)'
        secondaryColor='rgb(1, 1, 162)'
      />
      <TourCard
        days={5}
        difficulty='hard'
        guidesCount={3}
        maxStrength={15}
        sleepArea='Provided Tents'
        title1='the snow '
        title2='adventurer'
        price={897}
        primaryColor='$color_orange_light'
        secondaryColor='$color_orange_dark'
      />
    </div>
  );
};

export default Tours;
