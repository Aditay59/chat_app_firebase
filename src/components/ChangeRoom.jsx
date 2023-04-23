import React from 'react';

const ChangeRoom = ({setRoom})=> {

    const clickHandler = () =>{
        setRoom(null);
    }

  return (
    <>
    <button onClick={clickHandler} className='ChangeRm'>Change Room</button>
    </>
  )
}

export default ChangeRoom;