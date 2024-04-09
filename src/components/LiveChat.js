import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../Utils/helper';

const LiveChat = () => {

  const [liveMessage,setLiveMessage]=useState("");

  const disptach=useDispatch();
  const chatMessages=useSelector(store=>store.chat.message)

  useEffect(()=>{
    const i=setInterval(() => {
      //APi polling
      // console.log("API POLLING");

      disptach(addMessage({
        name: generateRandomNames(),
        message: makeRandomMessage(20)
      }))
    }, 2000);

    return ()=>clearInterval(i);
  },[])

  return (
    <>
    <div className='ml-2 p-2 border border-black w-full h-[600px] bg-gray-300 rounded-md overflow-y-scroll flex flex-col-reverse'>
      <div>{chatMessages.map((c,index)=>(
        <ChatMessage key={index} name={c.name} message={c.message}/>
      ))}
      </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
      e.preventDefault();
      console.log("On form Submit" , liveMessage);
      disptach(addMessage({
        name: "Priyash sharma",
        message : liveMessage
      }))
      setLiveMessage("");
    }}>
      <input type='text' className='w-[550px] p-2' value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value);
      }}/>
      <button className='px-4 mx-2 py-1 bg-green-200 rounded-sm' >Send</button>
    </form>
    </>
  )
}

export default LiveChat
