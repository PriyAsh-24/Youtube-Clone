import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams]=useSearchParams();

    // console.log(searchParams.get("v"));

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='p-4 m-2 w-full h-full'>
        <div className='w-full h-full'>
            <div className='flex w-full h-full'>
                <div>
                    <iframe 
                        width='1200'
                        height='600'
                        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?&autoplay=1"} 
                        title="YouTube video player" 
                        frameBorder ="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    />
                </div>
                <div className='w-full h-600'>
                    <LiveChat/>
                </div>
            </div>
            <div>
                <CommentsContainer/>
            </div>
        </div>
    </div>
  )
}

export default WatchPage
