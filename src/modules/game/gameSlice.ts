import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DIMENSIONS, GameSlice, GAME_STATUS } from './types';

const initialState: GameSlice = {
  hiddenIds: [],
  status: GAME_STATUS.IDLE,
  dimensions: DIMENSIONS._4X4,
};

export const gameSlice = createSlice({
  name: 'game',
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
    setDimensions: (state, action: PayloadAction<DIMENSIONS>) => {
      state.dimensions = action.payload;
    },
    restartGame: (state) => {
      state.status = GAME_STATUS.PLAYING;
      state.hiddenIds = [];
    },
  },
});

export const {
  resetHiddenIds,
  addHiddenId,
  setGameStatus,
  setDimensions,
  restartGame,
} = gameSlice.actions;

export default gameSlice.reducer;
