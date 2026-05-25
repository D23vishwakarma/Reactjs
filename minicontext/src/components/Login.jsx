import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username,setUsername]=useState('')
        const [password,setPassword]=useState('')
        const {setUser}=useContext(UserContext)
    const handlechange=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <>
        <div>
            <input type="text" placeholder="username"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            ></input>
            <input type="text" placeholder="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <button onClick={handlechange}>Submit</button>

        </div>
        </>
    )
}

export default Login
