import { useState } from "react";
import {Link} from 'react-router-dom'

const LoginPage = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
  
    const handelSubmit = async (e)=>{
      e.preventDefault()
      await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username,
          password,
          expiresInMins: 30,
        })
      })
      .then(res => res.json())
      .then(data=> localStorage.setItem("token", data.token));
    }

  return (
    <>
      <div className="w-1/2 p-20 bg-slate-950 rounded-sm mt-[100px] mx-auto">
       <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
        <input className="border-none pl-3 py-3 outline-none" type="text" placeholder="Enter Username" value={username} onChange={(e)=> setUserName(e.target.value)}/>
        <input className="border-none pl-3 py-3 outline-none" type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <input className="p-3 bg-green-700 cursor-pointer text-white" type="submit" value={"Login"}/>
       </form>
      </div>
      <Link className="block w-fit mt-5 rounded-md mx-auto py-3 px-5 text-xl font-semibold bg-red-800 text-white" to="/profile">Profile Page</Link>
    </>
  )
}

export default LoginPage