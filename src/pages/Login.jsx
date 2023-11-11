import React, { useRef, useState } from 'react'
import Style from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigate = useNavigate()

  let arr = JSON.parse(localStorage.getItem('signup')) || [];
  const [msg, setmsg] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    let obj={
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)
    let checkUser = () =>{
      for(let i=0; i<arr.length; i++){
        if(arr[i].email===emailRef.current.value){
          if(arr[i].passwrd===passwordRef.current.value){
            navigate('/home')
            return;
          }
        }
      }
      setmsg("User not found or Invalid Credentials!")

    }
    checkUser();
  }

   
  return (
    <div className={Style.login} onSubmit={handleSubmit}>
      <p style={{textAlign:"center",backgroundColor:"red",margin:"auto"}}>{msg}</p>
      <h1 style={{textAlign:"center"}}>Login</h1>
        <form action="" className={Style.form}>
          <label className={Style.label} htmlFor="">Email</label>
          <input className={Style.input} type="email" ref={emailRef}/>
          <label className={Style.label} htmlFor="">Password</label>
          <input className={Style.input} type="password" ref={passwordRef}/>
          <button type='submit' className={`${Style.button} btn btn-success`}>Login</button>
          <p>Do not have an account? <Link to="/">Sign up</Link></p>
        </form>
    </div>
  )
}

export default Login
