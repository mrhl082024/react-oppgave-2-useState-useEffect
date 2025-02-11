import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import CookieClicker from './components/CookieClicker'
import CatFacts from './components/CatFacts'

function App() {
  return (
    <>
      <CookieClicker/>
      <CatFacts/>
    </>
  )
}

export default App
