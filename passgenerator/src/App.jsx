import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [password, setpassword] = useState("")
  const [length,setlength]=useState(8)
  const [numberalloted,setnumberalloted]=useState(false)
  const [charalloted,setcharalloted]=useState(false)
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberalloted){
      str+='0123456789'
    }
    if(charalloted){
      str+='!@#$%^&*()_=+[]{}|~'
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setpassword(pass)
  },[length,numberalloted,charalloted,setpassword])
  const passreference=useRef(null)
  const copytoclipboard=useCallback(()=>{
    passreference.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordgenerator()
  },[length,numberalloted,charalloted,passwordgenerator])
  return (
    <div className='w-full max-w-screen flex justify-center-safe flex-wrap'>
      <div className='bg-gray-700 rounded-2xl p-4 w-175 justify-center shadow-1xl transform-border'>
        <h2 className=' text-orange-800 p-4 rounded-2xl'>Password Generator</h2>
        <div className='flex justify-center mb-8 w-full'>
          <input type="text"
          placeholder='Password'
          className='bg-amber-50 text-amber-600 rounded-l-2xl p-2'
          value={password}
          readOnly
          ref={passreference}
          />
          <button className='bg-blue-400 rounded-r-2xl  text-white p-2 hover:bg-blue-700' onClick={copytoclipboard}>Copy</button>
        </div>
        <div className='w-full flex justify-evenly flex-wrap'>
          <div>
          <input type="range" 
          value={length}
          onChange={(e)=>{
            setlength(e.target.value)
          }}
          min={6}
          max={14}
          className='cursor-pointer text-amber-200 accent-blue-400  mr-1.5'
          />
          <label>Length :{length}</label>
          </div>
          <div>
          <input type="checkbox" 
          defaultChecked={numberalloted}
          onChange={()=>{setnumberalloted((prev)=>!prev)
          }}
          className='cursor-pointer text-amber-200 accent-blue-400 h-5 w-5 align-middle mr-1.5'
          />
          <label className=' accent-blue-400'>Number</label>
          </div>
          <div>
          <input type="checkbox" 
          defaultChecked={charalloted}
          onChange={()=>{setcharalloted((prev)=>!prev)
          }}
          className='cursor-pointer text-amber-200 accent-blue-400 h-5 w-5 align-middle mr-1.5'
          />
          <label className=' accent-blue-600'>Character</label>
          </div>
       </div>
      </div>
    </div>
  )
}

export default App
