import { configureStore } from '@reduxjs/toolkit'
import pomodoroReducer from '../src/slice/pomodoroSlice'

// Configure the Redux store with the pomodoro reducer
export const store = configureStore({
  reducer: {
    // Add pomodoro slice to the store's reducer
    pomodoro: pomodoroReducer,
  },
})

// Type definition for the entire Redux state
export type RootState = ReturnType<typeof store.getState>

// Type definition for the dispatch function, allowing typed actions
export type AppDispatch = typeof store.dispatch
