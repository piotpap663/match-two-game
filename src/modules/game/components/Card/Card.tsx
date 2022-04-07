import { CardWrapper, CardImg } from "./style";
import emptyImg from "assets/images/wall.jpg";
import { LEVELS } from "modules/game/types";

interface CardProps {
  id: number;
  turnedOff: boolean;
  flipped: boolean;
  onClick: () => void;
  cardsAmount: number;
  selectedGameLevel: LEVELS;
}
export const Card = ({
  id,
  turnedOff,
  onClick,
  flipped,
  cardsAmount,
  selectedGameLevel,
}: CardProps) => (
  <CardWrapper
    turnedOff={turnedOff}
    onClick={onClick}
    flipped={flipped}
    cardsAmount={cardsAmount}
  >
    <CardImg
      data-testid="card-image"
      selectedGameLevel={selectedGameLevel}
      turnedOff={turnedOff}
      flipped={flipped}
      src={flipped ? require(`assets/images/${id}.jpg`) : emptyImg}
      idNr={id}
    ></CardImg>
  </CardWrapper>
);
