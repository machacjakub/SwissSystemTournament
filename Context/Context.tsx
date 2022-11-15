import * as React from 'react';
import { createContext, useState } from 'react';

const ContextData = createContext({});

export const ContextProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    filledForm: 0,
    currentRound: 0,
    roundsTotal: 0,
    initRanking: 'random',
    roundsPlayed: [],
    players: [
      {
        id: 0,
        name: '',
        initRank: 0,
        points: 0,
        bucholz: 0,
        playersPlayed: {},
      },
      {
        id: 1,
        name: '',
        initRank: 0,
        points: 0,
        bucholz: 0,
        playersPlayed: {},
      },
    ],
  });

  function handleFormSubmit(rounds, initRank, event) {
    const dummy = JSON.parse(JSON.stringify(appData));
    dummy.roundsTotal = rounds;
    dummy.initRanking = initRank;
    dummy.filledForm = 1;
    setAppData(dummy);
    console.log(
      'Context - handleFormSubmit: appData.players: ' + appData.players.length
    );
    console.log(
      'Context - handleFormSubmit: appData.roundsTotal: ' + appData.roundsTotal
    );
    event.preventDefault();
  }

  function handlePlayersSubmit(players, event) {
    const dummy = JSON.parse(JSON.stringify(appData));
    dummy.players = [...players];
    dummy.filledForm = 2;
    setAppData(dummy);
    console.log('Context - handlePlayersSubmit: players: ' + players.length);
    console.log(
      'Context - handlePlayersSubmit: dummy.players: ' + dummy.players.length
    );
    console.log(
      'Context - handlePlayersSubmit: appData.players: ' +
        appData.players.length
    );
    console.log(
      'Context - handlePlayersSubmit: dummy.players: ' +
        JSON.stringify(dummy.players)
    );
    console.log(
      'Context - handlePlayersSubmit: appData.players: ' +
        JSON.stringify(appData.players)
    );
    event.preventDefault();
  }

  return (
    <ContextData.Provider
      value={{
        appData,
        handleFormSubmit,
        handlePlayersSubmit,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextData;
