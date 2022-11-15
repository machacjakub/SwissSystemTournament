import * as React from 'react';
import { useState, useContext } from 'react';

function FormRow({ id, players, updateFun }) {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
    updateFun(id, e.target.value, rank);
  };
  const handleRankChange = (e) => {
    setRank(e.target.value);
    updateFun(id, name, e.target.value);
  };
  return (
    <div
      style={{
        width: '94%',
        backgroundColor: 'lightblue',
        padding: '5px',
      }}
    >
      ID: {id}{' '}
      <label>
        Name: <input type="string" onChange={handleNameChange} value={name} />
      </label>
      <label>
        {' '}
        Rank: <input type="number" onChange={handleRankChange} value={rank} />
      </label>
    </div>
  );
}

export default FormRow;
