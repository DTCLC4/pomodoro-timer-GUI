import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { RootState } from "../store";
import { startSession, pauseSession, tick } from "../slice/pomodoroSlice";

const Timer: React.FC = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ store
  const { timeLeft, sessionType, isRunning, pomodoroDuration, shortBreakDuration, longBreakDuration } = useSelector(
    (state: RootState) => state.pomodoro
  );

  // Tính toán tổng thời gian dựa trên loại phiên
  let totalDuration;
  switch (sessionType) {
    case 'pomodoro':
      totalDuration = pomodoroDuration;
      break;
    case 'short':
      totalDuration = shortBreakDuration;
      break;
    case 'long':
      totalDuration = longBreakDuration;
      break;
    default:
      totalDuration = pomodoroDuration; // Giá trị mặc định
      break;
  }

  const percentage = (timeLeft / totalDuration) * 100;

  // Sử dụng useEffect để dispatch action `tick()` mỗi giây
  useEffect(() => {
    let timer: number | null = null;

    if (isRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning, timeLeft, dispatch]);

  // Format thời gian thành phút và giây
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className="timer">
      <div className="timer_display">
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={4}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: 'var(--accent-color)',
            textColor: 'var(--text)',
            trailColor: 'none',
          })}
        >
          {/* Hiển thị thời gian */}
          <div style={{ fontSize: '24px', color: 'var(--text)' }}>
            {formatTime(timeLeft)}
          </div>

          {/* Nút start/pause */}
          {isRunning ? (
            <button
              className="display_start-pause"
              onClick={() => dispatch(pauseSession())}
            >
              Pause
            </button>
          ) : (
            <button
              className="display_start-pause"
              onClick={() => dispatch(startSession())}
            >
              Start
            </button>
          )}
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Timer;
