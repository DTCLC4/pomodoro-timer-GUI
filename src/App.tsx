import React, { useState } from 'react'

import Controls from './components/controls'
import Header from './components/header'
import Timer from './components/timer'

import './App.css'

// Main App component that holds the state and integrates other components
const App: React.FC = () => {

  // State to manage the text displayed on the start/pause button
  const [buttonText, setButtonText] = useState('START')

  return (
    <div className='container'>
      {/* Header component displays the title of the app */}
      <Header title='Pomodoro App' />

      {/* Controls component handles session type selection (Pomodoro, Short Break, Long Break) */}
      <Controls
       // Pass current button text as prop
        buttonText={buttonText}
        // Pass function to update button text as prop
        setButtonText={setButtonText}
      />

      {/* Timer component displays the countdown timer and start/pause functionality */}
      <Timer
      // Pass current button text as prop
        buttonText={buttonText}
        // Pass function to update button text as prop
        setButtonText={setButtonText}
      />
    </div>
  )
}

export default App
