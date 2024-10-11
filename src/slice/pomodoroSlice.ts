import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PomodoroState {
  sessionType: string;
  timeLeft: number;
  isRunning: boolean;
  completedPomodoros: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  pomodoroDuration: number;
}

const initialState: PomodoroState = {
  sessionType: 'pomodoro',
  timeLeft: 5, // 25 phút
  isRunning: false,
  completedPomodoros: 0,
  shortBreakDuration: 3, // 5 phút
  longBreakDuration: 3, // 15 phút
  pomodoroDuration: 5, // 25 phút
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    setSessionType(state, action: PayloadAction<string>) {
      state.sessionType = action.payload;
      // Cập nhật timeLeft dựa trên loại phiên được chọn
      if (action.payload === 'pomodoro') {
        state.timeLeft = state.pomodoroDuration;
      } else if (action.payload === 'short') {
        state.timeLeft = state.shortBreakDuration;
      } else if (action.payload === 'long') {
        state.timeLeft = state.longBreakDuration;
      }
      state.isRunning = false; // Đặt trạng thái là không chạy khi thay đổi phiên
    },
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
  setSessionType,
  startSession,
  pauseSession,
  resetSession,
  tick,
  switchToNextSession,
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
