import * as React from 'react';
import { useContext } from 'react';
import ContextData from './Context/Context';
import Rankings from './Components/Rankings';
import RoundsContainer from './Components/Rounds/RoundsContainer';
import StartingForm from './Components/Form/StartingForm';
import { ContextProvider } from './Context/Context';
import './style.css';
import { AppDataT } from './Types';
import GameState from './Components/GameState';
import PlayersForm from './Components/Form/PlayersForm';

export default function App() {
  const { appData, petr }: any = useContext(ContextData);
  const players = [{}];
  for (let i = 0; i <= 20; i++) {
    players[i] = { id: i, points: 0, results: {} };
  }
  function countCombinations(x) {
    if (x < 1) return 0;
    if (x <= 2) return 1;
    if (x <= 4) return 3;
    return ((x % 2) + x - 1) * countCombinations(x - 2);
  }
  return (
    <ContextProvider>
      <StartingForm />
      <PlayersForm />
      <table style={{ width: '100%' }}>
        <tbody>
          <tr style={{ width: '100%' }}>
            <td style={{ width: '45%' }}>
              <Rankings />
            </td>
            <td style={{ width: '45%' }}>
              <RoundsContainer />
            </td>
          </tr>
        </tbody>
      </table>
      <GameState />
    </ContextProvider>
  );
}
