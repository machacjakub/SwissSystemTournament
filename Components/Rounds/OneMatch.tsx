import * as React from 'react';

function OneMatch() {
  return (
    <div
      style={{
        width: '91%',
        minWidth: '467px',
        border: '1px solid black',
        backgroundColor: 'lightgreen',
        margin: '0 5px',
        padding: '3px 2%',
      }}
    >
      <div style={{ display: 'inline-block', width: '150px' }}>
        Player1 (ELO)
      </div>
      <div style={{ display: 'inline-block', width: 'min-content' }}>
        <form
          style={{
            display: 'inline-block',
            border: '1px solid black',
            backgroundColor: 'white',
            padding: '2px 10px',
            borderRadius: '15px',
            width: '144px',
          }}
        >
          <label htmlFor="1" style={{ marginRight: '-3px' }}>
            win
          </label>
          <input type="radio" id="1" value="1" name="score" />{' '}
          <label htmlFor="0.5" style={{ marginRight: '-3px' }}>
            draw
          </label>
          <input type="radio" id="0.5" value="0.5" name="score" />{' '}
          <label htmlFor="0" style={{ marginRight: '-3px' }}>
            lose
          </label>
          <input type="radio" id="0" value="0" name="score" />{' '}
        </form>
      </div>
      <div
        style={{ display: 'inline-block', width: '150px', textAlign: 'right' }}
      >
        Player2 (EL2)
      </div>
    </div>
  );
}

export default OneMatch;
