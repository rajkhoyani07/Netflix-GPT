import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInFrom = () => {
            setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
    <div>
    <Header/>
  </div>
  <div className='absolute'>
  <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
      alt='logo'
    /> 
  </div>

  <form className='w-3/12 absolute p-12 my-36 mx-auto text-white right-0 left-0 bg-black bg-opacity-80 rounded-lg '>
  <h1 className='font-bold  text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
  {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
    <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
    <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
    <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInFrom}>{ isSignInForm ? "Sign New to Netflix? Sign Up Now" : "Allready registered? Sign In Now"}</p>
  </form>
  </div>
    
  )
}

export default Login;