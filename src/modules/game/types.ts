export interface GameSlice {
  status: GAME_STATUS;
  hiddenIds: number[];
  dimensions: DIMENSIONS;
  level: LEVELS;
}
export enum GAME_STATUS {
  IDLE = "idle",
  PLAYING = "playing",
  FINISHED = "finished",
}
export enum DIMENSIONS {
  _4X4 = "4x4",
  _6X6 = "6x6",
}
export enum LEVELS {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}
