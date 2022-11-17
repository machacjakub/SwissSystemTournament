interface AppDataT {
  filledForm: 0 | 1 | 2;
  currentRound: number;
  roundsTotal: number;
  initRanking: 'elo' | 'rank' | 'groups' | 'random';
  roundsPlayed: number[][];
  players: PlayerType[];
}

interface PlayerType {
  id: number;
  name: string;
  initRank: number;
  points: number;
  buchholz: number;
  playersPlayed: {};
}

export type { AppDataT, PlayerType };
