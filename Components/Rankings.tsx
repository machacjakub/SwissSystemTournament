import * as React from 'react';
import { useContext } from 'react';
import ContextData from '../Context/Context';
import { rankingSort } from '../Functions/RankingCalculation';

function Rankings() {
  const { appData }: any = useContext(ContextData);
  const players = rankingSort(appData.players);
  console.log(JSON.stringify(players));
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
      <tr>
        <th>Name</th>
        <th>
          {appData.initRanking == 'elo'
            ? 'ELO'
            : appData.initRanking == 'rank'
            ? 'Rank'
            : ''}
        </th>
        <th>Points</th>
        <th>Buchholz</th>
      </tr>
      {players.map((player) => {
        return (
          <tr key={player.id}>
            <td>{player.name} - </td>
            <td>{appData.initRanking == 'random' ? '' : player.initRank}</td>
            <td>
              <b>{player.points}</b>
            </td>
            <td>({player.buchholz})</td>
          </tr>
        );
      })}
    </div>
  );
}

export default Rankings;
