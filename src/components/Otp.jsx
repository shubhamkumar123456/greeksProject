import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const navigate = useNavigate()
    let otpRef = useRef();
    const handleClick=()=>{
        let otp = otpRef.current.value;
            if(otp==="123456"){
                console.log("success")
                navigate('/home')

            }else{
                console.log("error")
            }
    }
  return (
    <div>
      <h1>Please Enter Your Otp</h1>
      <input type="text"  ref={otpRef}/>
      <button onClick={handleClick}>Log in</button>
    </div>
  )
}

export default Otp
