import { useDispatch, useSelector } from 'react-redux';
import { startGame, setDimensions, setGameLevel } from '../../gameSlice';
import { selectDimensions, selectGameLevel } from '../../selectors';
import { DIMENSIONS, LEVELS } from '../../types';
import {
  ButtonContainer,
  DimensionLabel,
  DimensionOption,
  SelectDimension,
  SelectorContainer,
  SelectorContainers,
  StartButton,
  StartGameWrapper,
} from './style';

export const StartGame = () => {
  const dispatch = useDispatch();

  const selectedGameDimensions = useSelector(selectDimensions);
  const selectedGameLevel = useSelector(selectGameLevel);

  const handleStart = () => {
    dispatch(startGame());
  };
  const handleOnChangeDimension = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cards = e.target.value as DIMENSIONS;
    dispatch(setDimensions(cards));
  };
  const handleOnChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const level = e.target.value as LEVELS;
    dispatch(setGameLevel(level));
  };

  return (
    <StartGameWrapper data-testid="startgame">
      <SelectorContainers>
        <SelectorContainer>
          <DimensionLabel htmlFor={'dimensions'}>Choose size:</DimensionLabel>
          <SelectDimension
            value={selectedGameDimensions}
            name="dimension"
            id="dimensions"
            onChange={handleOnChangeDimension}
          >
            {Object.values(DIMENSIONS).map((dimension, dimensionIdx) => (
              <DimensionOption key={dimensionIdx} value={dimension}>
                {dimension}
              </DimensionOption>
            ))}
          </SelectDimension>
        </SelectorContainer>

        <SelectorContainer>
          <DimensionLabel htmlFor={'level'}>Choose level:</DimensionLabel>
          <SelectDimension
            value={selectedGameLevel}
            name="level"
            id="level"
            onChange={handleOnChangeLevel}
          >
            {Object.values(LEVELS).map((lvl, lvlIdx) => (
              <DimensionOption key={lvlIdx} value={lvl}>
                {lvl}
              </DimensionOption>
            ))}
          </SelectDimension>
        </SelectorContainer>
      </SelectorContainers>
      <ButtonContainer>
        <StartButton data-testid="start-game-btn" onClick={handleStart}>
          Start
        </StartButton>
      </ButtonContainer>
    </StartGameWrapper>
  );
};
