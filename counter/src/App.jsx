import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 let [value,setvalue]=useState(15)
 const add=()=>{
  if(value<20){
  value=value+1;
  setvalue(value)
  }
 }
 const dec=()=>{
  if(value>0){
   value=value-1;
   setvalue(value)
  }
 }
  return (
    <>
     <>
     <h2>divyansh start project</h2>
     <h3>current value is {value}</h3>
     <button onClick={add}>Inc value {value}</button>
     <button onClick={dec}>Dec value {value}</button>
     </>
    </>
  )
}

export default App
