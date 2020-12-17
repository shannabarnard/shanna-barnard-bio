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
    <div className="App">
      <div className="main-content">
        <User user={user} />
        <Resume user={resume} />
        <Highlights user={highlights} />
        <Description user={description} />
      </div>
    </div>
  )
}

export default App

