import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='font-medium text-center text-2xl sm:text-3xl  p-4'>
        <h1>{text1} {text2}</h1>
    </div>
  )
}

export default Title