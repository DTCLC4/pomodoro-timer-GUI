import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSessionType } from '../slice/pomodoroSlice';

const Controls: React.FC = () => {
  const dispatch = useDispatch();

  // Lấy sessionType từ Redux store
  const { sessionType } = useSelector((state: RootState) => state.pomodoro);

  // Hàm xử lý thay đổi radio button
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSessionType(event.target.value));
  };
  return (
    <form className='controls'>
      <input
        type='radio'
        id='pomodoro'
        name='mode'
        value='pomodoro'
        checked={sessionType === 'pomodoro'}
        onChange={handleChange}
      />
      <label htmlFor='pomodoro' className='controls_button'>Pomodoro</label>

      <input
        type='radio'
        id='short'
        name='mode'
        value='short'
        checked={sessionType === 'short'}
        onChange={handleChange}
      />
      <label htmlFor='short' className='controls_button'>Short Break</label>

      <input
        type='radio'
        id='long'
        name='mode'
        value='long'
        checked={sessionType === 'long'}
        onChange={handleChange}
      />
      <label htmlFor='long' className='controls_button'>Long Break</label>
    </form>
  );
}

export default Controls
