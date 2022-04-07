import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardsAmount, getNumbersShuffledList } from "../../utils";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";
import { StartGame } from "./components/StartGame/StartGame";
import { restartGame } from "./gameSlice";
import { selectDimensions, selectGameStatus } from "./selectors";
import { GAME_STATUS } from "./types";

export const Game = () => {
  const dispatch = useDispatch();

  const isPlaying = useSelector(selectGameStatus);
  const selectedDimensions = useSelector(selectDimensions);

  const cardsAmount = getCardsAmount(selectedDimensions);
  const cardsListShuffled = getNumbersShuffledList(cardsAmount);

  useEffect(() => {
    dispatch(restartGame());
  }, [dispatch]);

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
