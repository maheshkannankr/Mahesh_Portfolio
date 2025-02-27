const Globe = ({ strokeColor }) => {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M32 1C46.359 1 59 13.641 59 28C59 42.359 46.359 55 32 55C22 55 19 51 19 51'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <path
        d='M32 48C43.0457 48 52 39.0457 52 28C52 16.9543 43.0457 8 32 8C20.9543 8 12 16.9543 12 28C12 39.0457 20.9543 48 32 48Z'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <path
        d='M32 54V64'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <path
        d='M22 63H42'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

const Map = ({ strokeColor }) => {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 59L22 51L42 59L63 51V5L42 13L22 5L1 13V59Z'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <path
        d='M22 5V51'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <path
        d='M42 13V59'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

const Compass = ({ strokeColor }) => {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1_3)'>
        <path
          d='M32 63.292C47.6252 63.292 60.292 50.6252 60.292 35C60.292 19.3748 47.6252 6.70801 32 6.70801C16.3748 6.70801 3.70799 19.3748 3.70799 35C3.70799 50.6252 16.3748 63.292 32 63.292Z'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M37 40L45 21L26 29L19 47L37 40Z'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinejoin='bevel'
        />
        <path
          d='M26 29L37 40'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M36.9 7C36.965 6.677 37 6.342 37 6C37 3.239 34.761 1 32 1C29.239 1 27 3.239 27 6C27 6.342 27.035 6.677 27.1 7'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M32 7V12'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M32 58V63'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M60 35H55'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M9 35H4'
          stroke={strokeColor}
          strokeWidth='2'
          strokeMiterlimit='10'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_3'>
          <rect width='64' height='64' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const Heart = ({ strokeColor }) => {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 21C1 41 32 59 32 59C32 59 63 41 63 21C63 12.715 57 5 48 5C39.715 5 32 10.715 32 19C32 10.715 24.285 5 16 5C7 5 1 12.715 1 21Z'
        stroke={strokeColor}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export { Map, Compass, Globe, Heart };
