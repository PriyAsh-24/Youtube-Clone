import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const list=["All","Gaming","Songs","Live","Cricket","Soccer","Valentine","Arduino","javascript","HTML","Smartphone","AI","News"]

  return (
    <div className='flex'>
      {list.map((item,index)=><Button key={index} name={item}/>)}
    </div>
  )
}

export default ButtonList
