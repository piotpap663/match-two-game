import { CardWrapper, CardImg } from './style';
import emptyImg from 'assets/images/wall.jpg';

interface CardProps {
  id: number;
  turnedOff: boolean;
  flipped: boolean;
  onClick: () => void;
  cardsAmount: number;
}
export const Card = ({
  id,
  turnedOff,
  onClick,
  flipped,
  cardsAmount,
}: CardProps) => (
  <CardWrapper
    turnedOff={turnedOff}
    onClick={onClick}
    flipped={flipped}
    cardsAmount={cardsAmount}
  >
    <CardImg
      turnedOff={turnedOff}
      src={flipped ? require(`assets/images/${id}.jpg`) : emptyImg}
    ></CardImg>
  </CardWrapper>
);
