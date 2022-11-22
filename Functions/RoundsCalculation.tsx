import { AppDataT, Round, PlayerType } from '../Types';
import { rankingSort } from './RankingCalculation';

function getNewRound(appData: AppDataT) {
  const data = JSON.parse(JSON.stringify(appData));
  return firstRound(data);
}

function firstRound(appData: AppDataT) {
  let data: AppDataT = JSON.parse(JSON.stringify(appData));
  let players: PlayerType[] = rankingSort(data.players);
  let round: Round = [];
  for (let i = 0; i < players.length; i++) {
    round[i];
  }
  return 0;
}
