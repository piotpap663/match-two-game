import styled, { css } from 'styled-components';
export const CARD_DIMENSION = 200;
export const CARD_MARGIN = 10;

export const StyledCard = styled.div<{ turnedOff: boolean; flipped: boolean }>`
  width: ${CARD_DIMENSION}px;
  height: ${CARD_DIMENSION}px;
  box-sizing: border-box;
  padding: 0;

  background: transparent;
  margin: ${CARD_MARGIN}px;
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
`;

export const StyledImg = styled.img<{ turnedOff: boolean }>`
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
`;
