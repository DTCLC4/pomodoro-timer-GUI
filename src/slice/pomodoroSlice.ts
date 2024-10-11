import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PomodoroState {
  sessionType: 'pomodoro' | 'shortBreak' | 'longBreak';
  timeLeft: number;
  isRunning: boolean;
  completedPomodoros: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  pomodoroDuration: number;
}

const initialState: PomodoroState = {
  sessionType: 'pomodoro',
  timeLeft: 1500, // 25 phút
  isRunning: false,
  completedPomodoros: 0,
  shortBreakDuration: 300, // 5 phút
  longBreakDuration: 900, // 15 phút
  pomodoroDuration: 1500, // 25 phút
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    startSession(state) {
      state.isRunning = true;
    },
    pauseSession(state) {
      state.isRunning = false;
    },
    resetSession(state) {
      state.isRunning = false;
      state.timeLeft = state.sessionType === 'pomodoro'
        ? state.pomodoroDuration
        : state.sessionType === 'shortBreak'
        ? state.shortBreakDuration
        : state.longBreakDuration;
    },
    tick(state) {
      if (state.isRunning && state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    },
    switchToNextSession(state) {
      if (state.sessionType === 'pomodoro') {
        state.completedPomodoros += 1;
        state.sessionType = state.completedPomodoros % 4 === 0 ? 'longBreak' : 'shortBreak';
      } else {
        state.sessionType = 'pomodoro';
      }
      state.timeLeft = state.sessionType === 'pomodoro'
        ? state.pomodoroDuration
        : state.sessionType === 'shortBreak'
        ? state.shortBreakDuration
        : state.longBreakDuration;
      state.isRunning = false;
    },
  },
});

export const {
  startSession,
  pauseSession,
  resetSession,
  tick,
  switchToNextSession,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
