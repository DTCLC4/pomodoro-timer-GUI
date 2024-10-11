import { configureStore } from '@reduxjs/toolkit';
import pomodoroReducer from '../src/slice/pomodoroSlice';
import settingsReducer from '../src/slice/settingsSlice';

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
