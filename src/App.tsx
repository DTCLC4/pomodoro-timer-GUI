import React from 'react'

import Controls from './components/controls'
import Header from './components/header'
import Timer from './components/timer'

import './App.css'

const App: React.FC = () => {

  return (
    <div className='container'>
      <Header title="Pomodoro App" />
      <Controls />
      <Timer />
    </div>
  )
}

export default App