import React, { Fragment, useState } from 'react'
import "./Login.css"
import logo from '../../Asset/Netflix_logo.png'
import Signin from '../Signin/Signin'
const Login = () => {
    const [signIn,setSignin]=useState(false);
   
  return (
    
    <div className='Login_Page' style={
          {
            backgroundImage:`url("https://www.shutterstock.com/image-photo/kaunas-lithuania-2023-february-23-260nw-2267820387.jpg")`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            
        }
        
        }>
    <div className='SignUp_Content'>
      <header>
        <img src={logo} className='app_logo'/>
        <button onClick={()=>setSignin(true)} className='signIn_btn'>Sign In</button>
      </header>
   
    </div>
  
    <div className='login_content'>
        {
        signIn?
       
        <Signin/>
        :
        <Fragment>
        <div className='signup_details'>
        <h1>Unlimited movies, TV shows and more</h1>
        <h6>Starts at ₹149. Cancel at any time.</h6>
        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        </div>
        <div className='Form'>
        <input type='text' placeholder='Email Address'/>
        <button onClick={()=>setSignin(true)}>Get Started</button>
        </div>
        </Fragment>
       }

    
    </div>
    </div>
  )
}

export default Login