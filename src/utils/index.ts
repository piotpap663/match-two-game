import { DIMENSIONS } from '../modules/game/const';

export const getNumbersShuffledList = (cardsAmount: number) => {
  const dummyData = Array.from({ length: cardsAmount / 2 }, (_, i) => i + 1);
  const cardsListShuffled = [...dummyData, ...dummyData]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return cardsListShuffled;
};

export const getCardsAmount = (selectedDimensions: DIMENSIONS) => {
  switch (selectedDimensions) {
    case DIMENSIONS._4X4:
      return 16;
    case DIMENSIONS._8X8:
      return 64;
    default:
      return 169;
  }
};
