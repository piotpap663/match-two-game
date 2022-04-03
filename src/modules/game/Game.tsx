import { useSelector } from 'react-redux';
import { getCardsAmount, getNumbersShuffledList } from '../../utils';
import { Cards } from './components/Cards/Cards';
import { Header } from './components/Header/Header';
import { StartGame } from './components/StartGame/StartGame';
import { GAME_STATUS } from './const';
import { selectDimensions, selectGameStatus } from './gameSlice';

export const Game = () => {
  const isPlaying = useSelector(selectGameStatus);
  const selectedDimensions = useSelector(selectDimensions);

  const cardsAmount = getCardsAmount(selectedDimensions);
  const cardsListShuffled = getNumbersShuffledList(cardsAmount);

  return (
    <>
      <Header />
      {isPlaying === GAME_STATUS.PLAYING ? (
        <Cards cardsAmount={cardsAmount} cardsList={cardsListShuffled} />
      ) : (
        <StartGame />
      )}
    </>
  );
};
