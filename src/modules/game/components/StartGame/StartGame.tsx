import { useDispatch, useSelector } from 'react-redux';
import { startGame, setDimensions } from '../../gameSlice';
import { selectDimensions } from '../../selectors';
import { DIMENSIONS } from '../../types';
import {
  ButtonContainer,
  DimensionLabel,
  DimensionOption,
  SelectDimension,
  SelectorContainer,
  StartButton,
  StartGameWrapper,
} from './style';

export const StartGame = () => {
  const dispatch = useDispatch();

  const selectedGameDimensions = useSelector(selectDimensions);

  const handleStart = () => {
    dispatch(startGame());
  };
  const handleOnChange = (e: { target: { value: any } }) => {
    const cards = e.target.value as DIMENSIONS;
    dispatch(setDimensions(cards));
  };

  return (
    <StartGameWrapper data-testid="startgame">
      <SelectorContainer>
        <DimensionLabel htmlFor={'dimensions'}>Choose size:</DimensionLabel>
        <SelectDimension
          value={selectedGameDimensions}
          name="dimension"
          id="dimensions"
          onChange={handleOnChange}
        >
          {Object.values(DIMENSIONS).map((dimension, dimensionIdx) => (
            <DimensionOption key={dimensionIdx} value={dimension}>
              {dimension}
            </DimensionOption>
          ))}
        </SelectDimension>
      </SelectorContainer>
      <ButtonContainer>
        <StartButton onClick={handleStart}>Start</StartButton>
      </ButtonContainer>
    </StartGameWrapper>
  );
};
