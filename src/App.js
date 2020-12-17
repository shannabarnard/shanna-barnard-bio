import React, { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import User from './components/User'
import Resume from './components/Resume'
import Highlights from './components/Highlights'
import Description from './components/Description'

import './App.css';

function App() {
  const { data } = useContext(AppContext)

  if (!data) {
    return null
  }

  const { user, resume, highlights, description } = data.payload
  return (
    <div className="App grid-container">
      <div className="main-content">
        <User user={user} />
        <Resume resume={resume} />
        <Highlights highlights={highlights} />
        <Description description={description} />
      </div>
    </div>
  )
}

export default App

