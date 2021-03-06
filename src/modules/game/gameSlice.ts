import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DIMENSIONS, GameSlice, GAME_STATUS, LEVELS } from "./types";

const initialState: GameSlice = {
  hiddenIds: [],
  status: GAME_STATUS.IDLE,
  dimensions: DIMENSIONS._4X4,
  level: LEVELS.EASY,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addHiddenId: (state, action: PayloadAction<number>) => {
      state.hiddenIds = [...state.hiddenIds, action.payload];
    },
    resetHiddenIds: (state) => {
      state.hiddenIds = [];
    },
    setGameStatus: (state, action: PayloadAction<GAME_STATUS>) => {
      state.status = action.payload;
    },
    setGameLevel: (state, action: PayloadAction<LEVELS>) => {
      state.level = action.payload;
    },
    setDimensions: (state, action: PayloadAction<DIMENSIONS>) => {
      state.dimensions = action.payload;
    },
    startGame: (state) => {
      state.status = GAME_STATUS.PLAYING;
      state.hiddenIds = [];
    },
    restartGame: (state) => {
      state.status = GAME_STATUS.IDLE;
      state.hiddenIds = [];
    },
  },
});

export const {
  resetHiddenIds,
  addHiddenId,
  setGameStatus,
  setGameLevel,
  setDimensions,
  startGame,
  restartGame,
} = gameSlice.actions;

export default gameSlice.reducer;
