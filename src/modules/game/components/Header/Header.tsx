import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStopwatch } from 'react-timer-hook';
import { GAME_STATUS } from '../../const';
import { selectGameStatus } from '../../gameSlice';
import { StyledHeader, Title } from './style';

export const Header = () => {
  const isPlaying = useSelector(selectGameStatus);

  const { seconds, minutes, hours, start, pause } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (isPlaying === GAME_STATUS.PLAYING) {
      start();
    } else if (isPlaying === GAME_STATUS.FINISHED) {
      pause();
    }
  }, [isPlaying]);

  return isPlaying === GAME_STATUS.IDLE ? null : (
    <StyledHeader>
      {isPlaying === GAME_STATUS.FINISHED && <Title>{'Your result: '}</Title>}
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </StyledHeader>
  );
};
