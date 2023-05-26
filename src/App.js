import './App.css';
import { useState } from 'react';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import Room from './components/Room';
import Cookies from 'universal-cookie';
import SignOut from './components/SignOut';
import ChangeRoom from './components/ChangeRoom';

const cookies = new Cookies();

const App = ()=> {
  const [isAuth,setisAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState(null);

  if(!isAuth) {
    return (
      <>
      <SignIn setisAuth={setisAuth}/>
      </>
    );
  }

  return (
    <>
    <div className='TopBtn'>
    <SignOut setisAuth={setisAuth} setRoom={setRoom}/>
    <ChangeRoom setRoom={setRoom}/>
    </div>
   
    {room ? (
      <> <Chat room={room} /> </>
      ):(
      <> <Room setRoom={setRoom}/> </>
      )}
    </>
  )

}

export default App;
