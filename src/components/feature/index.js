import './index.scss';
import { Map, Compass, Globe, Heart } from '../../assets/svgs';

const Feature = () => {
  const featureCard = ({ Svg, Heading = '' }) => {
    return (
      <div className='feature_main_card'>
        <Svg strokeColor="#28b485"/>
        <h3 className='feature_main_card_heading'>{Heading}</h3>
        <p className='feature_main_card_text'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    );
  };
  return (
    <div className='feature'>
      <div className='feature_main'>
        {featureCard({ Svg: Map, Heading: 'Find Your Way' })}
        {featureCard({ Svg: Compass, Heading: 'Meet Nature' })}
        {featureCard({ Svg: Globe, Heading: 'Explore the World' })}
        {featureCard({ Svg: Heart, Heading: 'Live a Healthier Life' })}
      </div>
    </div>
  );
};

export default Feature;
