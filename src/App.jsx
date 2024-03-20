import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
// import StartHere from './Pages/StartHere'
// import SideNav from './Components/SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <StartHere/> */}
      {/* <SideNav/> */}
    </>
  )
}

export default App
