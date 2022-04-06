import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStopwatch } from 'react-timer-hook';
import { selectGameStatus } from '../../selectors';
import { GAME_STATUS } from '../../types';
import { HeaderWrapper, HeaderTitle } from './style';

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
    <HeaderWrapper data-testid="game-header">
      {isPlaying === GAME_STATUS.FINISHED && (
        <HeaderTitle>{'Your result: '}</HeaderTitle>
      )}
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </HeaderWrapper>
  );
};
