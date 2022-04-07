import { RootState } from "../../store";

export const selectHiddenIds = (state: RootState) => state.game.hiddenIds;
export const selectGameStatus = (state: RootState) => state.game.status;
export const selectDimensions = (state: RootState) => state.game.dimensions;
export const selectGameLevel = (state: RootState) => state.game.level;
