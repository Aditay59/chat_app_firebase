import React, { useEffect, useState, useRef } from 'react';
import {auth,db} from '../Firebase/firebase-config';
import { addDoc, collection, onSnapshot,doc, orderBy, query, serverTimestamp, where, updateDoc } from 'firebase/firestore';


const Chat = ({room})=> {

    const [newMessage,setnewMessage] = useState("");
    const [messages,setMessages] = useState([]);

    const messageRef = collection(db,"messages");
    const scrollRef = useRef(null);

    const changeHandler = (e) =>{
        setnewMessage(e.target.value);
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
       if(newMessage===""){
        return;
       }
        //saving messages to firebase database;
        await addDoc(messageRef,{
            text:newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            image: auth.currentUser.photoURL,
            room:room,
            uid: auth.currentUser.uid
        });
        setnewMessage("");
    }

    useEffect(()=>{
        const queryMsg = query(messageRef, where("room","==",room),orderBy("createdAt"));
        
        const received = onSnapshot(queryMsg,(snapshot)=>{
            let mArr = [];
            snapshot.forEach((doc)=>{
                mArr.push({...doc.data(), id:doc.id});
            });
            setMessages(mArr);
        });
        return ()=>received();
    },[])

    const updateHandler = async (id,uid) =>{
        const documentRef = doc(messageRef,id);

        if(uid===auth.currentUser.uid) {
            const prmt = prompt("Enter updated message");
            if(prmt) {
                await updateDoc(documentRef,{
                    text:prmt
                })
            }
        }
    }

    useEffect(()=>{
        if(scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    });

  return (
    <>
    <div className='Ccontainer'>
        <div className='heading'> <h1 className='head'>Welcome to room: <span className='room'>{room}</span> </h1> </div>

        <div className='messages' ref={scrollRef}>
            {
                messages.map((item,index)=>(
                    <div key={index} className='mesg'>
                        <div>
                        <img className='picture' src={item.image} height={25} width={25} alt='dp' style={{borderRadius:"50%"}} /> 
                        <span className='name'> {item.user} : </span> 
                        <span className='text' onClick={()=>updateHandler(item.id,item.uid)} > {item.text} </span>
                        </div>
                    </div>
                ))
            }

        </div>
        
        <div className='sendMsg'>
            <form onSubmit={submitHandler}>
            <input className='Minput' type='text' value={newMessage} onChange={changeHandler} placeholder='Enter message' />
            <button className='send' type='submit'>Send</button>
            </form>
        </div>
    
    </div>
    </>
  )
}

export default Chat;