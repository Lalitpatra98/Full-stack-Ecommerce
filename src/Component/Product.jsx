import React from 'react'
import {Link} from 'react-router'
const Product = ({id,image,name,price}) => {
  return (
    <>
    <Link to={`/product/${id}`} >

          <div className='overflow-hidden'>
            <img src={image} alt="" className='hover:scale-110 transition ease-in-out'/>
          </div>
          <div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>${price}</p>
          </div>
          
    </Link>
    
    </>
  )
}

export default Product