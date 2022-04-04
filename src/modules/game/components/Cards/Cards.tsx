import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHiddenId, setGameStatus } from '../../gameSlice';
import { selectHiddenIds } from '../../selectors';
import { GAME_STATUS } from '../../types';
import { Card } from '../Card/Card';
import { StyledCards } from './style';

interface CardsProps {
  cardsAmount: number;
  cardsList: number[];
}
export const Cards = ({ cardsAmount, cardsList }: CardsProps) => {
  const dispatch = useDispatch();

  const hiddenIds = useSelector(selectHiddenIds);

  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const isFinished = hiddenIds.length === cardsAmount / 2;

  useEffect(() => {
    if (isFinished) {
      dispatch(setGameStatus(GAME_STATUS.FINISHED));
    }
  }, [isFinished, dispatch]);

  const handleClick = (id: number, cardIndex: number) => () => {
    if (flippedIds.includes(cardIndex)) return;
    if (flippedIds.length === 1) {
      if (cardsList[flippedIds[0]] === id) {
        dispatch(addHiddenId(id));
      }
    }
    if (flippedIds.length === 2) {
      setFlippedIds([cardIndex]);
    } else {
      setFlippedIds([...flippedIds, cardIndex]);
    }
  };

  return isFinished ? null : (
    <StyledCards cardsAmount={cardsAmount}>
      {cardsList.map((card, cardIdx) => (
        <Card
          key={cardIdx}
          id={card}
          onClick={handleClick(card, cardIdx)}
          turnedOff={hiddenIds.includes(card)}
          flipped={flippedIds.includes(cardIdx)}
          cardsAmount={cardsAmount}
        />
      ))}
    </StyledCards>
  );
};
