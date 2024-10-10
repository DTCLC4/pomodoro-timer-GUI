import './App.css'
import Controls from './components/controls'
import Header from './components/header'
import Timer from './components/timer'

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <Controls />
      <Timer />
    </div>
  )
}

export default App
