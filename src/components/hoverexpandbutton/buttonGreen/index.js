import './index.scss';

const HoverExpandButtonGreen = ({ text = '', link = '#' }) => {
  return (
    <a href={link} className='green_button_text'>
      {text}
    </a>
  );
};

export default HoverExpandButtonGreen;
