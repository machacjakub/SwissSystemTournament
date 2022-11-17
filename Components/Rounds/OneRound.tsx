import * as React from 'react';
import OneMatch from './OneMatch';

function OneRound() {
  return (
    <div
      style={{
        width: '500px',
        border: '3px solid black',
        backgroundColor: 'orange',
        margin: '5px',
        padding: '5px',
        display: 'inline-block',
      }}
    >
      Round1
      <OneMatch />
    </div>
  );
}

export default OneRound;
