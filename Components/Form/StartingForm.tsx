import * as React from 'react';
import { useState, useContext } from 'react';
import ContextData from '../../Context/Context';
import PlayersForm from './PlayersForm';

function StartingForm() {
  const { appData, handleFormSubmit }: any = useContext(ContextData);
  const [rounds, setRounds] = useState('');
  const [initRank, setInitRank] = useState('random');
  const [players, setPlayers] = useState([]);
  function handleSubmit(event) {
    handleFormSubmit(rounds, initRank, event);
  }
  function handleChange(setX: Function) {
    return function (e) {
      setX(e.target.value);
    };
  }
  const handleRoundsChange = handleChange(setRounds);
  const handleInitRankChange = handleChange(setInitRank);
  const handlePlayersChange = handleChange(setPlayers);

  return (
    <div
      style={{
        width: '94%',
        backgroundColor: 'lightblue',
        padding: '20px',
        margin: '15px',
        borderRadius: '20px',
        display: appData.filledForm == 0 ? 'inline-block' : 'none',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Number of rounds:{' '}
          <input type="number" onChange={handleRoundsChange} />
        </label>
        <br />
        <label htmlFor="initRanking">
          Initital ranking:
          <select
            id="initRanking"
            name="initRanking"
            onChange={handleInitRankChange}
          >
            <option value="random">Random</option>
            <option value="elo">ELO</option>
            <option value="rank">Rank</option>
            <option value="groups">Groups</option>
          </select>
        </label>
        <input type="submit" value="Submit" style={{ margin: '10px 5px' }} />
      </form>
    </div>
  );
}

export default StartingForm;
