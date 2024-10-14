import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setSessionType } from '../slice/pomodoroSlice'
import { TextProps } from '../type/TextProps'

// Controls component for selecting session type (Pomodoro, Short Break, Long Break)
const Controls: React.FC<TextProps> = ({ setButtonText }) => {
  const dispatch = useDispatch()

  // Retrieve the current session type (pomodoro, short, or long) from the Redux store
  const { sessionType } = useSelector((state: RootState) => state.pomodoro)

  // Handle the mode change when user selects a session type, and dispatch the new session type to the store
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the sessionType in the Redux store
    dispatch(setSessionType(event.target.value))
  };

  // Set the button text to 'START' whenever the session type changes
  useEffect(() => {
    setButtonText('START');
  },
  // Dependency array includes sessionType and setButtonText
   [sessionType, setButtonText])

  return (
    <form className='controls'>
      {/* Radio button for selecting Pomodoro mode */}
      <input
        type='radio'
        id='pomodoro'
        name='sessionType'
        value='pomodoro'
        // Check if the current sessionType is 'pomodoro'
        checked={sessionType === 'pomodoro'}
        // Call handleModeChange on selection
        onChange={handleModeChange}
      />
      <label htmlFor='pomodoro' className='controls_button'>Pomodoro</label>

      {/* Radio button for selecting Short Break mode */}
      <input
        type='radio'
        id='short'
        name='sessionType'
        value='short'
        checked={sessionType === 'short'}
        onChange={handleModeChange}
      />
      <label htmlFor='short' className='controls_button'>Short Break</label>

      {/* Radio button for selecting Long Break mode */}
      <input
        type='radio'
        id='long'
        name='sessionType'
        value='long'
        checked={sessionType === 'long'}
        onChange={handleModeChange}
      />
      <label htmlFor='long' className='controls_button'>Long Break</label>
    </form>
  )
}

export default Controls
