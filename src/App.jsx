import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FirstApp } from './components/componente1/titulo'
import './App.css'

function App() {
  return (
    <>
     <FirstApp tittle="Tema: React" subtitle={13} />
    </>
  )
}

export default App
