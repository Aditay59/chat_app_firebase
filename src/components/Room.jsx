import React, { useRef } from 'react';

const Room = ({setRoom})=> {

    const inputRoomRef = useRef(null);

    const submitHandler = (e) =>{
        e.preventDefault(); //preventing page to reload in form submit;
        setRoom(inputRoomRef.current.value);
    }

  return (
    <>
    <div className='Rcontainer'>
        <div className='head'> <h1>Enter the room you want to join</h1> </div>
        
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' className='input' ref={inputRoomRef} placeholder='Enter room' />
                <button type='submit' className='Rbtn'>Enter Chat</button>
            </form>
        </div>
    
    </div>
    </>
  )
}

export default Room;