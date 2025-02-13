import { useState } from 'react'
import CookieClicker from './components/CookieClicker'
import CatFacts from './components/CatFacts'
import "./styles/App.css"
import UserComponent from './components/UserComponent'

function App() {
  return (
    <>
      <CookieClicker/>
      <CatFacts/>
      <UserComponent />
    </>
  )
}

export default App
