import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import Product from "./Product";
const LatestProduct = () => {
  const { data } = useContext(ShopContext);
  const [ItemList,setItemList] =useState([])
    console.log(data);
    
  useEffect(() => (
    setItemList(data.slice(0,10))
  ),[data])
  return (
    <div>
      <Title text1={"Latest"} text2={"Section"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta
        nulla accusamus, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
      </p>
      {/* frist Approch  */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6">
        {data?.map((productItem) => (
          <div className="w-36 h-96">
            <div>
                <img src={productItem.image} alt="" className="w-44"/>
            </div>
            <div className=" text-sm">
                <p>{productItem.title}</p>
                <p>price:{productItem.price}</p>
            </div>
          </div>
        ))}
      </div> */}

        {/* second Approch */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 ">
        {
          ItemList?.map((item,index)=>(
            <Product key={index} id={item.id} price={item.price} image={item.image} name={item.title} />
          ))
        }
      </div>
    </div>
  );
};

export default LatestProduct;
