import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UncontrolledForm from './components/UncontrolledForm'; 
import ControlledForm from './components/ControlledForm'; 
import UncontrolledFile from './components/UncontrolledFile';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Uncontrolled Form best for search button <UncontrolledForm />
<br />

Controlled Form best for live search <ControlledForm />
      <br />
      Uncontrolled Form best for file upload      <UncontrolledFile />
    </>
  )
}

export default App
