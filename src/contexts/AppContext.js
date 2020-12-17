import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppContextProvider = props => {
  const [data, setData] = useState()

  const fetchURL = 'http://localhost:4000/api'

  const getData = () => fetch(`${fetchURL}/profile`).then(res => res.json())

  useEffect(() => {
    getData().then(data => setData(data))
  }, [])

  return (
    <AppContext.Provider value={{ data }}>{props.children}</AppContext.Provider>
  )
}

export default AppContextProvider
