import React from 'react'
import { Button } from '@nextui-org/react'
const NewsletterBox = () => {
  return (
    <div className='flex flex-col items-center my-10 gap-2 p-10'>
        <h2 className='font-semibold text-2xl'>Subscribe now & get 20% off</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae molestias aperiam.</p>
        <div className='flex items-center'>
            <input type="text" placeholder='Enter your Email' className='py-[7px] px-4 outline-none border'/>
            <Button size='md' radius='none'>SUBSCRIBE</Button>
        </div>
    </div>
  )
}

export default NewsletterBox