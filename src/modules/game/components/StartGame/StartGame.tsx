import { useDispatch, useSelector } from 'react-redux';
import { DIMENSIONS, GAME_STATUS } from '../../const';
import {
  selectDimensions,
  setDimensions,
  setGameStatus,
} from '../../gameSlice';
import { StyledStartGame, Select, Option, Label, Button } from './style';

export const StartGame = () => {
  const dispatch = useDispatch();
  const selectedGameDimensions = useSelector(selectDimensions);

  const handleStart = () => {
    dispatch(setGameStatus(GAME_STATUS.PLAYING));
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
