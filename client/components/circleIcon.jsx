import React from 'react';
import { Circle } from 'react-feather';

const CircleIcon = fill => {

  let fillColor = '';
  switch (fill.fill) {
    case 'Open':
      fillColor = 'green';
      break;
    case 'In-Progress':
      fillColor = 'gold';
      break;
    case 'Closed':
      fillColor = 'firebrick';
      break;
    default:
      break;
  }

  return <Circle size="30" fill={fillColor}/>;
};

export default CircleIcon;
