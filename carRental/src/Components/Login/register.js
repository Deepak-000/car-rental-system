import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Register = () => {
  const[regDet,setDetails] = useState({})
  const navigate = useNavigate();
  const updateValue = (e) =>{
    setDetails({...regDet,[e.target.name]:e.target.value})
  }
  const signUp = () =>{
    if(regDet.email === '' || regDet.role === 'select' || regDet.mobile === '' || regDet.password === '' || regDet.role === 'select')
        alert('please fill or select correctly')
    else{
      if(regDet.role === 'owner'){
        axios.post('http://localhost:1001/owner/signup/',regDet).then((res)=>{
          if(res.data === 'Successfully Registered'){
            alert('Successfully Registered')
            alert('login in with your crediantials')
              navigate('/login')
          }
        })
      }else{
        axios.post('http://localhost:1001/user/signup/',regDet).then((res)=>{
          if(res.data === 'Successfully Registered'){
            alert('Successfully Registered')
            alert('login in with your crediantials')
              navigate('/login')
          }
        })
      }
    } 
    
  }
  return (
    <>
        <div className='signup'>
          <h3 className='signText'>Register Here</h3>
            <div className='signup-input'>
                <div className='signup-div'>
                  <input type='text' placeholder='Full Name' name='name' onChange={updateValue} className='cont-spac' />
                  <span className='signup-span'>Full Name</span>
                </div>
                <div className='signup-div'>
                  <input type='email' placeholder='Email' name='email' onChange={updateValue} className='cont-spac' />
                  <span className='signup-span'>EMAIL</span>
                </div>
                <div className='signup-div'>
                  <input type='password' placeholder='Password' name='password' onChange={updateValue} className='cont-spac' />
                  <span className='signup-span'>PASSWORD</span>
                </div>
                <div className='signup-div'>
                  <input type='text' placeholder='Mobile number' name='mobile' onChange={updateValue} className='cont-spac' />
                  <span className='signup-span'>Mobile </span>
                </div>
                <div className='col-md-4' style={{
                  margin:'10px',
                  display:'flex'
                }}>
                  <select name='role' onChange={updateValue}>
                    <option value='select'>Select Role</option>
                    <option value='owner'>Owner</option>
                    <option value='user'>User</option>
                  </select>
                </div>
                <div className="col-md-4" style={{
                  margin:'10px',
                  display:'flex'
                }}>
                  <Link onClick={()=>{alert("Sorrry We will reach you ")}}>forgot Password</Link>
                </div>
                <div className='signup-div'>
                  <button className='signupSubmit btn btn-primary' onClick={signUp} >Sign up</button>
                </div>
                <div className="signup-div">
                 <code>Already have an account</code> &nbsp; <button className='btn btn-warning' onClick={()=>{navigate('/login')}}>Sign in</button> &nbsp; <code> here</code>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register