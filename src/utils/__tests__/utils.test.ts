import { DIMENSIONS } from "modules/game/types";
import { getCardsAmount, getNumbersShuffledList, getRandomDegree } from "utils";

describe("getNumbersShuffledList should return shuffled list", () => {
  for (const cardsAmount of Object.values(DIMENSIONS)) {
    const arrayLength = getCardsAmount(cardsAmount);
    it(`with proper length ${arrayLength}`, () => {
      const arr = getNumbersShuffledList(arrayLength);
      expect(arr).toHaveLength(arrayLength);
    });
  }
});

describe("getCardsAmount should return cards amount", () => {
  it(`when passing 4x4 type`, () => {
    const arrayLength = getCardsAmount(DIMENSIONS._4X4);
    expect(arrayLength).toBe(16);
  });
  it(`when passing 6x6 type`, () => {
    const arrayLength = getCardsAmount(DIMENSIONS._6X6);
    expect(arrayLength).toBe(36);
  });
});

describe("getCardsAmount should NOT return cards amount", () => {
  it(`when passing 4x4 type`, () => {
    const arrayLength = getCardsAmount(DIMENSIONS._4X4);
    expect(arrayLength).not.toBe(0);
  });
  it(`when passing 6x6 type`, () => {
    const arrayLength = getCardsAmount(DIMENSIONS._6X6);
    expect(arrayLength).not.toBe(6);
  });
});

describe("getRandomDegree should return", () => {
  it(`90deg when passed 0`, () => {
    const degree = getRandomDegree(0);
    expect(degree).toBe("90");
  });
  it(`180deg when passed 1`, () => {
    const degree = getRandomDegree(1);
    expect(degree).toBe("180");
  });
  it(`270deg when passed 2`, () => {
    const degree = getRandomDegree(2);
    expect(degree).toBe("270");
  });
  it(`90deg when passed 3`, () => {
    const degree = getRandomDegree(0);
    expect(degree).toBe("90");
  });
  it(`180deg when passed 4`, () => {
    const degree = getRandomDegree(1);
    expect(degree).toBe("180");
  });
  it(`270deg when passed 5`, () => {
    const degree = getRandomDegree(2);
    expect(degree).toBe("270");
  });
});

describe("getRandomDegree should NOT return", () => {
  it(`90deg when passed 0`, () => {
    const degree = getRandomDegree(0);
    expect(degree).not.toBe(90);
  });
  it(`180deg when passed 1`, () => {
    const degree = getRandomDegree(1);
    expect(degree).not.toBe(180);
  });
  it(`270deg when passed 2`, () => {
    const degree = getRandomDegree(2);
    expect(degree).not.toBe(270);
  });
  it(`90deg when passed 3`, () => {
    const degree = getRandomDegree(0);
    expect(degree).not.toBe(90);
  });
  it(`180deg when passed 4`, () => {
    const degree = getRandomDegree(1);
    expect(degree).not.toBe(180);
  });
  it(`270deg when passed 5`, () => {
    const degree = getRandomDegree(2);
    expect(degree).not.toBe(270);
  });
});
