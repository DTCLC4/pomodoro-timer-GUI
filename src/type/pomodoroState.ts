export interface PomodoroState {
  sessionType: string;
  timeLeft: number;
  isRunning: boolean;
  completedPomodoros: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  pomodoroDuration: number;
}
