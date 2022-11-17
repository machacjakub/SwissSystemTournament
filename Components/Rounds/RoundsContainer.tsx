import * as React from 'react';
import OneRound from '../../Components/Rounds/OneRound';
import OneMatch from './OneMatch';

function RoundsContainer() {
  return (
    <div
      style={{
        width: '530px',
        border: '3px solid black',
        backgroundColor: 'lightblue',
        margin: '5px',
        padding: '5px',
        display: 'inline-block',
      }}
    >
      <OneRound />
    </div>
  );
}

export default RoundsContainer;
