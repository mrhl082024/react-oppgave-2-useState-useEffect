import { useState } from 'react'
import viteLogo from '/vite.svg'
import CookieClicker from './components/CookieClicker'
import CatFacts from './components/CatFacts'
import "./styles/App.css"

function App() {
  return (
    <>
      <CookieClicker/>
      <CatFacts/>
    </>
  )
}

export default App
