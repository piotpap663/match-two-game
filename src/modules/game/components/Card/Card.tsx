import { StyledCard, StyledImg } from './style';
import emptyImg from '../../../../assets/images/wall.jpg';

interface CardProps {
  id: number;
  turnedOff: boolean;
  flipped: boolean;
  onClick: () => void;
}
export const Card = ({ id, turnedOff, onClick, flipped }: CardProps) => (
  <StyledCard turnedOff={turnedOff} onClick={onClick} flipped={flipped}>
    <StyledImg
      turnedOff={turnedOff}
      src={flipped ? require(`../../../../assets/images/${id}.jpg`) : emptyImg}
    ></StyledImg>
  </StyledCard>
);
