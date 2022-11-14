import * as React from 'react';
import { useContext } from 'react';
import ContextData from '../Context/Context';

function GameState() {
  const { appData, petr }: any = useContext(ContextData);
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        backgroundColor: 'grey',
        padding: '2px 20px',
        borderRadius: '20px'
      }}
    >
      <p>FilledForm: {JSON.stringify(appData.filledForm)}</p>
      <p>CurrentRound: {JSON.stringify(appData.currentRound)}</p>
      <p>RoundsTotal: {JSON.stringify(appData.roundsTotal)}</p>
      <p>InitialRanking: {JSON.stringify(appData.initRanking)}</p>
      <p>RoundsPlayed: {JSON.stringify(appData.roundsPlayed)}</p>
    </div>
  );
}

export default GameState;
