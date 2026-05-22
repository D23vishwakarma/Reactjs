import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"divyansh",
    email:"123@maik"
  }
  return (
    <>
      <h1 className='bg-amber-500 p-5 text-amber-50 rounded-2xl'>tailwind</h1>
      <Card channel="divyansh" newobj={myobj}/>
      <Card />
    </>
  )
}

export default App
