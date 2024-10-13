import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroState } from '../type/pomodoroState'

// The initial state for the Pomodoro timer, including the current session type (Pomodoro, short break, long break),
// remaining time, running state, number of completed Pomodoros, and durations for each session type.
const initialState: PomodoroState = {
  sessionType: 'pomodoro',
  timeLeft: 60,
  isRunning: false,
  completedPomodoros: 0,
  shortBreakDuration: 15,
  longBreakDuration: 30,
  pomodoroDuration: 60,
}

// The slice that handles the Pomodoro state and actions related to the Pomodoro timer.
const pomodoroSlice = createSlice({
  // The name of the slice.i
  name: 'pomodoro',
  // The initial state defined above.
  initialState,
  reducers: {
    // Reducer to change the session type (Pomodoro, short break, long break).
    setSessionType(state, action: PayloadAction<string>) {
      // Update the session type to the new one from the payload.
      state.sessionType = action.payload;

      // Update the timeLeft depending on the session type selected.
      if (action.payload === 'pomodoro') {
        // Set time for Pomodoro session.
        state.timeLeft = state.pomodoroDuration
      } else if (action.payload === 'short') {
        // Set time for short break.
        state.timeLeft = state.shortBreakDuration
      } else if (action.payload === 'long') {
        // Set time for long break.
        state.timeLeft = state.longBreakDuration
      }
      // Reset the running state to false when session changes.
      state.isRunning = false
    },

    // Reducer to start the session
    startSession(state) {
      // Set isRunning to true, which indicates the timer is active
      state.isRunning = true
    },

    // Reducer to pause the session
    pauseSession(state) {
      // Set isRunning to false, which stops the timer
      state.isRunning = false
    },

    // Reducer to handle ticking the timer every second
    tick(state) {
      // Check if the session is running and there is still time left
      if (state.isRunning && state.timeLeft > 0) {
        // Decrease the remaining time by 1 second
        state.timeLeft -= 1
      }
    },
  },
})

// Export the actions to be used in components.
export const {
  // Action to set the session type.
  setSessionType,
  startSession,
  pauseSession,
  tick
}
  = pomodoroSlice.actions;

// Export the reducer to be used in the Redux store.
export default pomodoroSlice.reducer
