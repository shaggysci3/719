import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DraggableDiv from './components/roomItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DraggableDiv name={"bed"} itemWidth={120} itemHeight={160}/>
     

    </>
  )
}

export default App
