import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  themeColor: string;
  fontFamily: string;
  soundEnabled: boolean;
  pomodoroDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
}

const initialState: SettingsState = {
  themeColor: '#ff6347', // Màu mặc định
  fontFamily: 'Arial',   // Font mặc định
  soundEnabled: true,
  pomodoroDuration: 1500, // 25 phút (đơn vị: giây)
  shortBreakDuration: 300, // 5 phút
  longBreakDuration: 900,  // 15 phút
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeColor(state, action: PayloadAction<string>) {
      state.themeColor = action.payload;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    toggleSound(state) {
      state.soundEnabled = !state.soundEnabled;
    },
    setPomodoroDuration(state, action: PayloadAction<number>) {
      state.pomodoroDuration = action.payload;
    },
    setShortBreakDuration(state, action: PayloadAction<number>) {
      state.shortBreakDuration = action.payload;
    },
    setLongBreakDuration(state, action: PayloadAction<number>) {
      state.longBreakDuration = action.payload;
    },
  },
});

export const {
  setThemeColor,
  setFontFamily,
  toggleSound,
  setPomodoroDuration,
  setShortBreakDuration,
  setLongBreakDuration,
} = settingsSlice.actions;

export default settingsSlice.reducer;
