import './index.scss';

const HoverExpandButtonWhite = ({ text = '', link = '#' }) => {
  return (
    <a href={link} className='button_text'>
      {text}
    </a>
  );
};

export default HoverExpandButtonWhite;
