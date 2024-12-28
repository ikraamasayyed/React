import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card2 from '/Users/ikraama/REACT/03tailwindprops/components/Card2'
import Card from '../components/Card'
import Lifafa from '../components/lifafa'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind test</h1>
      <Card/> 
      {/* <Card2/> */}
    </>
  )
}


export default App
