interface boardState {
  board: string[];
  pos: 0;
  row: number;
  key: string;
  correctedWord: string;
}

export interface rootState {
  board: boardState;
}
