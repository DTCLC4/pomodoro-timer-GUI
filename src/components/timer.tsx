import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

const Timer: React.FC = () => {

  return (
    <div className="timer">
      <div className="timer_display">
        <CircularProgressbarWithChildren
          value={100}
          strokeWidth={4}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: 'var(--accent-color)',
            textColor: 'var(--text)',
            trailColor: 'none',
          })}
        >
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Timer;
