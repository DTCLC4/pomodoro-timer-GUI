import React, { useEffect } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import 'react-circular-progressbar/dist/styles.css'
import { startSession, pauseSession, tick } from '../slice/pomodoroSlice'
import { TextProps } from '../type/TextProps'

// Timer component responsible for displaying the Pomodoro countdown timer and controlling session state (start, pause, etc.)
const Timer: React.FC<TextProps> = ({ buttonText, setButtonText }) => {
  const dispatch = useDispatch()

  // Extract necessary state variables from Redux store
  const { timeLeft, isRunning, sessionType, shortBreakDuration, longBreakDuration, pomodoroDuration } = useSelector((state: RootState) => state.pomodoro)

  // Handle start/pause button click
  const handleClick = () => {
    if (!isRunning) {
      dispatch(startSession())
      setButtonText('PAUSE')
    } else {
      dispatch(pauseSession())
      setButtonText('RESUME')
    }
  }

  // Format time from seconds to MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
  }

  // Adjust text size based on whether the timer has reached 0
  const textSize = timeLeft === 0 ? '12px' : '28px'

  // Determine total duration for the current session type (Pomodoro, Short Break, Long Break)
  let totalDuration;
  switch (sessionType) {
    case 'pomodoro':
      totalDuration = pomodoroDuration
      break
    case 'short':
      totalDuration = shortBreakDuration
      break
    case 'long':
      totalDuration = longBreakDuration
      break
    default:
      totalDuration = pomodoroDuration
      break
  }

  // Calculate the percentage of time completed
  const percentage = (timeLeft / totalDuration) * 100;

  // Effect hook to handle ticking of the timer every second when the session is running
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      // Start interval to dispatch 'tick' action every second
      interval = setInterval(() => {
        dispatch(tick())
      }, 1000)
    } else if (!isRunning && interval) {
      // Clear interval if timer is not running
      clearInterval(interval)
    }

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [isRunning, dispatch])

  // Display a message when the timer reaches 0
  const timesUpMessage = sessionType === 'pomodoro' ? 'Time for a break!' : 'Back to work!'

  // Display either the formatted time left or a message if time has run out
  const timeText = timeLeft === 0 ? timesUpMessage : formatTime(timeLeft)

  return (
    <div className='timer' onClick={handleClick}>
      <div className='timer_display'>
        {/* Circular progress bar that visually represents the remaining time */}
        <CircularProgressbarWithChildren
          // Set progress based on percentage of time left
          value={percentage}
          // Show formatted time or message
          text={timeText}
          strokeWidth={4}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            textSize: textSize,
            pathColor: 'var(--accent-color)',
            textColor: 'var(--text)',
            trailColor: 'none',
          })}
        >
          {/* Show start/pause button only if there's time left */}
          {timeLeft > 0 && (
            <button className="display_start-pause" onClick={handleClick}>
              {/* Display 'START', 'PAUSE', or 'RESUME' */}
              {buttonText}
            </button>
          )}
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default Timer
