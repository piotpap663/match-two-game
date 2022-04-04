import { useDispatch, useSelector } from 'react-redux';
import { restartGame, setDimensions } from '../../gameSlice';
import { selectDimensions } from '../../selectors';
import { DIMENSIONS } from '../../types';
import { StyledStartGame, Select, Option, Label, Button } from './style';

export const StartGame = () => {
  const dispatch = useDispatch();

  const selectedGameDimensions = useSelector(selectDimensions);

  const handleStart = () => {
    dispatch(restartGame());
  };
  const handleOnChange = (e: { target: { value: any } }) => {
    const cards = e.target.value as DIMENSIONS;
    dispatch(setDimensions(cards));
  };

  return (
    <StyledStartGame>
      <Label htmlFor={'dimensions'}>Choose size:</Label>

      <Select
        value={selectedGameDimensions}
        name="dimension"
        id="dimensions"
        onChange={handleOnChange}
      >
        {Object.values(DIMENSIONS).map((dimension, dimensionIdx) => (
          <Option key={dimensionIdx} value={dimension}>
            {dimension}
          </Option>
        ))}
      </Select>

      <Button onClick={handleStart}>Start</Button>
    </StyledStartGame>
  );
};
