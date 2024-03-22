import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login,logout } from "../utils/userSlice";
import { Link } from "react-router-dom";



const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const userData = useSelector((store) => store.user.items);
  const dispatch = useDispatch();
 

  const handelLogin=(e)=>{
    if(username==='' && password===''){
      return
    }
    e.preventDefault()
    dispatch(login(username, password))
 
  }
  const handelLogout=(e)=>{
    e.preventDefault()
    dispatch(logout())
    window.location.href='/'
 
  }

  if (!userData.loggedin) {
    return (
      <div className="">
        <div className="w-[50%]   mx-auto border-2 border-black p-4 m-4 text-center">
          <h1 className="text-2xl p-3 font-bold">Login</h1>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} className="p-3 m-2 w-[50%] rounded-lg border border-black" placeholder="Username" />
          <br />
          <input type="password" onChange={(e)=>setPassword(e.target.value)}  className="p-3 m-2 w-[50%] rounded-lg border border-black" placeholder="Password" />
          <br />
          <button onClick={handelLogin} className="p-3 rounded-lg bg-green-900 text-white">Login</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[100%] flex-col pt-4 flex justify-center items-center">
        <h1 className="font-bold text-lg">Go to the shopping page ! You are already logged in.</h1>
        <Link to='/' className="p-3 m-2 rounded-lg bg-gray-700 text-white">Shop</Link>
        <button onClick={handelLogout} className="p-3 m-2 rounded-lg bg-red-700 text-white">Logout</button>
      </div>
    );
  }
};

export default Login;
