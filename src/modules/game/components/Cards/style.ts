import styled from 'styled-components';
import { CARD_MARGIN, CARD_DIMENSION } from '../Card/style';

export const StyledCards = styled.div<{ cardsAmount: number }>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  max-width: ${({ cardsAmount }) =>
    Math.sqrt(cardsAmount) * (CARD_DIMENSION + CARD_MARGIN * 2)}px;

  //  880px for 4x4; max-width: 480px
  @media (max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION + CARD_MARGIN * 2)}px) {
    max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 2 + CARD_MARGIN * 2)}px;
  }
  // 440px for 4x4; max-width: 280px
  @media (max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 2 + CARD_MARGIN * 2)}px) {
    max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 4 + CARD_MARGIN * 2)}px;
  }
  // 280px for 4x4; max-width: 180px
  @media (max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 4 + CARD_MARGIN * 2)}px) {
    max-width: ${({ cardsAmount }) =>
      Math.sqrt(cardsAmount) * (CARD_DIMENSION / 8 + CARD_MARGIN * 2)}px;
  }
`;
