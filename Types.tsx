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

type Rounds = Round[];
type Round = Match[];
type Match = [number, number, MatchResult];
type MatchResult = 1 | 0.5 | 0 | 9;

export type { AppDataT, PlayerType, Rounds, Round };
