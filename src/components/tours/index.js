import './index.scss';
import TourCard from '../tourcard';
import Nat5 from '../../assets/images/nat-5.jpg';
import Nat6 from '../../assets/images/nat-6.jpg';
import Nat7 from '../../assets/images/nat-7.jpg';

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
        bgImage={Nat5}
        imgGradientPrimary='#ffb90080'
        imgGradientSecondary='#ff773080'
        primaryColor='#ffb900'
        secondaryColor='#ff7730'
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
        bgImage={Nat6}
        imgGradientPrimary='#7ed56f80'
        imgGradientSecondary='#28b48580'
        primaryColor='#7ed56f'
        secondaryColor='#28b485'
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
        bgImage={Nat7}
        imgGradientPrimary='#2d7dfe80'
        imgGradientSecondary='#0049bf80'
        primaryColor='#2323ff'
        secondaryColor='#0101a2'
      />
    </div>
  );
};

export default Tours;
