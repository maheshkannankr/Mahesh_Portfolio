import './index.scss';
import { Map, Compass, Globe, Heart } from '../../assets/svgs';

const Feature = () => {
  const featureCard = ({ Svg }) => {
    return (
      <div className='feature_main_card'>
        <Svg />
        <p className='feature_main_card_'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    );
  };
  return (
    <div className='feature'>
      <div className='feature_main'>{featureCard({ Svg: Map })}</div>
      <div className='feature_main'>{featureCard({ Svg: Globe })}</div>
      <div className='feature_main'>{featureCard({ Svg: Heart })}</div>
      <div className='feature_main'>{featureCard({ Svg: Compass })}</div>
    </div>
  );
};

export default Feature;
