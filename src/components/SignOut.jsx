import React from 'react';
import {signOut} from 'firebase/auth';
import {auth,provider,db} from '../Firebase/firebase-config';
import Cookies from 'universal-cookie';
import { collection, deleteDoc, getDocs } from 'firebase/firestore';

const cookies = new Cookies();

const SignOut = ({setisAuth,setRoom})=> {
  
  const messageRef = collection(db,"messages");

    const signoutHandler = async () =>{

      const querySnapshot = await getDocs(messageRef);
      console.log(querySnapshot);

      querySnapshot.forEach((doc)=>{
        deleteDoc(doc.ref);
        console.log("messages deleted");
      })

        await signOut(auth,provider);
        cookies.remove("auth-token");
        setRoom(null);
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