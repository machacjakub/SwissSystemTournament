import * as React from 'react';
import { useState, useContext } from 'react';
import ContextData from '../../Context/Context';
import FormRow from '../../Components/Form/FormRow';

function PlayersForm() {
  const { appData, handlePlayersSubmit }: any = useContext(ContextData);
  const [players, setPlayers] = useState([
    {
      id: 0,
      name: '',
      initRank: 0,
      points: 0,
      currentRank: 0,
      playersPlayed: {},
    },
    {
      id: 1,
      name: '',
      initRank: 0,
      points: 0,
      currentRank: 0,
      playersPlayed: {},
    },
  ]);
  let dummyPlayer = {
    id: players.length,
    name: '',
    initRank: 0,
    points: 0,
    currentRank: 0,
    playersPlayed: {},
  };
  function handleAdd() {
    setPlayers([...players, dummyPlayer]);
  }
  function updatePlayers(id, name, rank) {
    const dummy = JSON.parse(JSON.stringify(players));
    dummy[id].name = name;
    dummy[id].rank = rank;
    setPlayers(dummy);
    console.log('PlayersForm - updatePlayers: ' + name + ' ' + rank);
  }
  function handleSubmit(event) {
    handlePlayersSubmit(players, event);
    console.log('PlayersForm - handleSubmit: ' + players.length);
  }
  return (
    <div
      style={{
        width: '95%',
        padding: '20px',
        margin: '15px',
        display: appData.filledForm == 1 ? 'inline-block' : 'none',
        backgroundColor: 'lightgreen',
        borderRadius: '20px',
      }}
    >
      <form onSubmit={handleSubmit}>
        {players.map((player) => {
          return (
            <FormRow
              key={player.id}
              id={player.id}
              players={players}
              updateFun={updatePlayers}
            />
          );
        })}
        <div style={{ backgroundColor: 'white' }} onClick={handleAdd}>
          +
        </div>
        <input type="submit" value="Submit" style={{ margin: '10px 5px' }} />
      </form>
    </div>
  );
}

export default PlayersForm;
