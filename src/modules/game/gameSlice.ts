import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { DIMENSIONS, GAME_STATUS } from './const';

export interface GameSlice {
  status: GAME_STATUS;
  hiddenIds: number[];
  dimensions: DIMENSIONS;
}

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
  },
});

export const { resetHiddenIds, addHiddenId, setGameStatus, setDimensions } =
  gameSlice.actions;

export const selectHiddenIds = (state: RootState) => state.game.hiddenIds;
export const selectGameStatus = (state: RootState) => state.game.status;
export const selectDimensions = (state: RootState) => state.game.dimensions;

export default gameSlice.reducer;
