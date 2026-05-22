import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
    <>
    <div className=' flex w-full h-screen justify-center' style={{background:color}}>
      
    <h2 className='bg-amber-200 p-3 text-black h-13'>color changer</h2>
    <div className='flex flex-wrap fixed bottom-2 justify-center bg-white p-2'>
    <button onClick={()=>setColor("green")} className='p-2 text-black bg-green-600 mr-8'>Green</button>
    <button onClick={()=>setColor("blue")} className='p-2 text-black bg-blue-400 mr-8'>Blue</button>
    <button onClick={()=>setColor("red")} className='p-2 text-black bg-red-600 mr-8'>Red</button>
    <button onClick={()=>setColor("pink")} className='p-2 text-black bg-pink-300 mr-8'>pink</button>
    <button onClick={()=>setColor("violet")} className='p-2 text-black bg-violet-400 mr-8'>violet</button>
    <button onClick={()=>setColor("yellow")} className='p-2 text-black bg-yellow-400 mr-8'>Yellow</button>
    </div>
    </div>
    </>
  )
}

export default App
