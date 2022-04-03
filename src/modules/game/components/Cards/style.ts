import styled from 'styled-components';
import { CARD_MARGIN, CARD_DIMENSION } from '../Card/style';

export const StyledCards = styled.div<{ cardsAmount: number }>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${({ cardsAmount }) =>
    Math.sqrt(cardsAmount) * (CARD_DIMENSION + CARD_MARGIN * 2)}px;
`;
