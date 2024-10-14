import { createRoot } from 'react-dom/client'
import { store } from './store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

// Create the root element in the DOM and render the App component wrapped in the Redux Provider
createRoot(document.getElementById('root')!).render(
  // Wrap the App component in the Provider to give the entire app access to the Redux store
  <Provider store={store}>
    <App />
  </Provider>
)
