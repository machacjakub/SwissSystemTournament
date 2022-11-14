import * as React from 'react';
import { useContext } from 'react';
import ContextData from '../Context/Context';

function Rankings() {
  const { appData }: any = useContext(ContextData);
  return (
    <div
      style={{
        width: '100%',
        border: '3px solid black',
        backgroundColor: 'lightgrey',
        margin: '5px',
        display: 'inline-block',
      }}
    >
      Rankingssss
      {appData.players.map((player) => {
        return (
          <li key={player.id}>
            {player.name}{' '}
            {appData.initRanking == 'elo'
              ? 'ELO'
              : appData.initRanking == 'rank'
              ? 'Rank'
              : ''}
            : {player.rank}
          </li>
        );
      })}
    </div>
  );
}

export default Rankings;
