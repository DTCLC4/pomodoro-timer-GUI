import React from "react"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"

const Timer: React.FC = () => {

  return (
    <div className='timer'>
      <div className='timer_display'>
        <CircularProgressbarWithChildren
        value={70}
        strokeWidth={4}
        styles={buildStyles({
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
          // Colors & Fonts
          pathColor: 'var(--accent-color)',
          textColor: 'var(--text)',
          trailColor: 'none',
        })}>

        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default Timer
