import * as React from 'react';
import { useContext } from 'react';
import ContextData from '../Context/Context';
import { rankingSort } from '../Functions/RankingCalculation';

function Rankings() {
  const { appData }: any = useContext(ContextData);
  const players = rankingSort(appData.players);
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
      Rankings
      {players.map((player) => {
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
