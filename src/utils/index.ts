import { DIMENSIONS } from '../modules/game/types';

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
    case DIMENSIONS._6X6:
      return 36;
    default:
      return 16;
  }
};

export const getRandomDegree = (id: number) => {
  const random = (id % 3) + 1;
  switch (random) {
    case 1:
      return '90';
    case 2:
      return '180';
    case 3:
      return '270';
    default:
      return '90';
  }
};
