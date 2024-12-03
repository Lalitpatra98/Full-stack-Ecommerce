import React from 'react'
import {Link} from 'react-router'
const Product = ({id,image,name,price}) => {
  return (
    <>
    <Link to={`/product/${id}`} className='flex flex-col items-center' >

          <div className='overflow-hidden w-52 h-28'>
            <img src={image} alt="" className='hover:scale-110 transition ease-in-out w-20 mx-auto'/>
          </div>
          <div>
            <p className='p-1 text-xs'>{name}</p>
          <p className='text-xs font-medium'>${price}</p>
          </div>
          
    </Link>
    
    </>
  )
}

export default Product