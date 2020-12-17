import React, { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import User from './components/User'
// import './App.css';

function App() {
  const { data } = useContext(AppContext)

  if (!data) {
    return null
  }

  const { user } = data.payload
  return (
    <div className="App">
      <div className="main-content">
        <User user={user} />
      </div>
    </div>
  )
}

export default App

