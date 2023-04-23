import React from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth,provider} from '../Firebase/firebase-config';
import Cookies from 'universal-cookie';
import '../App.css';

const cookies = new Cookies();

const SignIn = ({setisAuth})=> {

    const clickHandler = async () =>{
        try {
            const result =  await signInWithPopup(auth,provider);
            cookies.set("auth-token",result.user.refreshToken);
            setisAuth(true);
            console.log(result);
        }
        catch(err) {
            console.error(err);
        }
       
    }

  return (
    <>
    <div className='Scontainer'>
        <div className='head'> <h1>Sign In with Google</h1> </div>
        <div className='google-btn'>
            <div className='google-icon-contain'>
            <img className='google-icon' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"  alt='logo'/>
            </div>
        <button onClick={clickHandler} className='btn'> Sign in with google </button>
        </div>
    </div>
    </>
  )
}

export default SignIn;