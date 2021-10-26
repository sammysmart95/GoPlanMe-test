import React from 'react';
import {Svg, Path} from 'react-native-svg';

export default function ModeSvg({size = 1, color}) {
  return (
    <Svg
      width="22"
      height="21"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.27 2.48999C5.64 10.03 11.02 14.9 14.93 16.29C13.54 17.38 11.81 18 10 18C5.59 18 2 14.41 2 9.99999C2 6.54999 4.2 3.59999 7.27 2.48999ZM9.99 0.00999451C4.4 0.00999451 0 4.53999 0 9.99999C0 15.52 4.48 20 10 20C13.71 20 16.93 17.98 18.66 14.98C11.15 14.73 6.57 6.54999 10.34 0.00999451C10.22 0.00999451 10.11 0.00999451 9.99 0.00999451Z"
        fill={color || '#323232'}
      />
    </Svg>
  );
}
