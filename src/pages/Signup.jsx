import React, { useRef, useState } from 'react'
import Style from './signup.module.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    let nameRef= useRef();
    let emailRef= useRef();
    let passwordRef= useRef();
    let phoneRef= useRef();
    let professionRef = useRef()
    let arr = JSON.parse(localStorage.getItem('signup')) || [];
    const [msg, setmsg] = useState(null);
    // let msg=null;
    const handleSubmit=(e)=>{
        e.preventDefault()
        let obj={
            name:nameRef.current.value,
            email:emailRef.current.value,
            passwrd:passwordRef.current.value,
            phone:phoneRef.current.value,
            profession:professionRef.current.value
        }
        let success=false;
        let CheckUser=()=>{
            for(let i=0; i<arr.length; i++){
                if(arr[i].email===emailRef.current.value){
                    return success
                }
            }
            success=true;
            arr.push(obj)
            return true
        }
        CheckUser()
        if(!success){
            setmsg("you have already registered please login!")
        }
    
        console.log(arr)
        localStorage.setItem('signup',JSON.stringify(arr))
        navigate('/login')
    }
  return (
    <div className={Style.signup}>
        <span>{msg}</span>
        <h1 style={{textAlign:"center",marginTop:"50px"}}>Sign up</h1>
      <form action="" className={Style.form} onSubmit={handleSubmit}>
        <label className={Style.label} htmlFor="">Name</label>
        <input className={Style.input} type="text" ref={nameRef} />
        <label className={Style.label} htmlFor="">Password</label>
        <input className={Style.input} type="password" ref={passwordRef}/>
        <label className={Style.label} htmlFor="">Email</label>
        <input className={Style.input} type="email" ref={emailRef}/>
        <label className={Style.label} htmlFor="">Phone No</label>
        <input className={Style.input} type="number" ref={phoneRef}/>
        <label className={Style.label} htmlFor="">Profession</label>
        <select className={Style.select} name="" id="" ref={professionRef}>
            <option value="">Select Your Profession</option>
            <option value="fullstack">FullStack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
        </select>
        <button className={Style.button} type='submit'>Submit</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
      </div>
  )
}

export default Signup
