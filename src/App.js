import React, { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import User from './components/User'
import Resume from './components/Resume'
// import './App.css';

function App() {
  const { data } = useContext(AppContext)

  if (!data) {
    return null
  }

  const { user, resume } = data.payload
  return (
    <div className="App">
      <div className="main-content">
        <User user={user} />
        <Resume user={resume} />
      </div>
    </div>
  )
}

export default App

