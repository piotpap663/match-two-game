import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStopwatch } from 'react-timer-hook';
import { selectGameStatus } from '../../selectors';
import { GAME_STATUS } from '../../types';
import { StyledHeader, Title } from './style';

export const Header = () => {
  const { seconds, minutes, hours, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const isPlaying = useSelector(selectGameStatus);

  useEffect(() => {
    if (isPlaying === GAME_STATUS.PLAYING) {
      reset();
    } else if (isPlaying === GAME_STATUS.FINISHED) {
      pause();
    }
    // eslint-disable-next-line
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
