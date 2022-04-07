import { LEVELS } from "modules/game/types";
import styled, { css } from "styled-components";
import { getRandomDegree } from "utils";

export const CARD_DIMENSION = 200;
export const CARD_MARGIN = 10;

export const CardWrapper = styled.div<{
  turnedOff: boolean;
  flipped: boolean;
  cardsAmount: number;
}>`
  width: ${CARD_DIMENSION}px;
  height: ${CARD_DIMENSION}px;
  box-sizing: border-box;

  padding: 0;
  margin: ${CARD_MARGIN}px;
  background: transparent;
  opacity: 0.7;
  border: none;
  cursor: pointer;

  transform-style: preserve-3d;
  transform: rotateY(180deg);
  transition: transform 0.2s, opacity 0.2s, display 1s;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(0deg);
      cursor: default;
      opacity: 1;
    `};
  ${({ turnedOff }) =>
    turnedOff &&
    css`
      cursor: default;
      outline: none;
      box-shadow: none;
    `}

  //  880px for 4x4
  @media (max-width: ${({ cardsAmount }) =>
    Math.sqrt(cardsAmount) * (CARD_DIMENSION + CARD_MARGIN * 2)}px) {
    width: ${CARD_DIMENSION / 2}px;
    height: ${CARD_DIMENSION / 2}px;
  }
  // 440px for 4x4
  @media (max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 2 + CARD_MARGIN * 2)}px) {
    width: ${CARD_DIMENSION / 4}px;
    height: ${CARD_DIMENSION / 4}px;
  }
  // 440px for 4x4
  @media (max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 4 + CARD_MARGIN * 2)}px) {
    width: ${CARD_DIMENSION / 8}px;
    height: ${CARD_DIMENSION / 8}px;
  }
`;

export const CardImg = styled.img<{
  turnedOff: boolean;
  selectedGameLevel: LEVELS;
  flipped: boolean;
  idNr: number;
}>`
  width: 100%;
  height: 100%;

  box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
  border-radius: 3px;

  ${({ turnedOff }) =>
    turnedOff &&
    css`
      transition: opacity 0.5s;
      opacity: 0;
    `}

  ${({ selectedGameLevel, flipped, idNr }) =>
    flipped &&
    selectedGameLevel !== LEVELS.EASY &&
    css`
      transform: rotate(
        ${selectedGameLevel === LEVELS.MEDIUM ? "90" : getRandomDegree(idNr)}deg
      );
    `}
`;
