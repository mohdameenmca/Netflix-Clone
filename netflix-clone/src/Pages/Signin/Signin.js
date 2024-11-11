import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase"
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { toast } from 'react-toastify';
const Signin = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const register=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
           toast.success('Netflix Account has been created',{theme:"colored"})
        }
        )
        .catch((err)=>{
           toast.error(err.message)
        })
    }

    const dispatch = useDispatch();
    const signinHandler=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((authUser)=>{
             toast.success('Welcome to Netflix')
            console.log(authUser);
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
  return (
    <form className='Signin'>
        <input type='text' placeholder='Email Address or Mobile' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button className='signIn' onClick={signinHandler}>Sign In</button>
        <h3 className='redirect_page'>
            <span>New to Netfilx?</span>
            <span onClick={register}>Sign up</span>
        </h3>
    </form>
  )
}

export default Signin