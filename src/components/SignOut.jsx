import React from 'react';
import {signOut} from 'firebase/auth';
import {auth,provider} from '../Firebase/firebase-config';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const SignOut = ({setisAuth})=> {

    const signoutHandler = async () =>{
        await signOut(auth,provider);
        cookies.remove("auth-token");
        setisAuth(false);
    }

  return (
    <>
    <div className='signout'>
    <button type='button' className='SObtn' onClick={signoutHandler}>Sign Out</button>
    </div>
    </>
  )
}

export default SignOut;