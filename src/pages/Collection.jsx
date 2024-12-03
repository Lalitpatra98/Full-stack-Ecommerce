import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../Component/Product";
const Collection = () => {
  const { data } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterProduct, setfilterProduct] = useState([]);
  const [category, setcategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else{
       setcategory(prev => [...prev, e.target.value]);
    }
     
    
  };
  const applyfilter = () => {
    let productsCopy = data.slice();
    if (category.length > 0) {
      productsCopy =data.filter((item) => category.includes(item.category));
    } 
      setfilterProduct(productsCopy);
    
  };

  useEffect(() => setfilterProduct(data), [data]);
  useEffect(() => applyfilter, [category]);

  return (
    <>
      <div className="flex  border-t">
        <div className="flex flex-col gap-4 w-32 mt-5 ">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setshowfilter(!showfilter)}
          >
            <p>FILTER</p>
            <IoIosArrowForward
              className={`${
                showfilter ? "rotate-90" : ""
              } transition-all ease-in-out`}
            />
          </div>

          <div className={`${showfilter ? "" : "hidden"}`}>
            <div className="flex flex-col mb-5 ">
              <CheckboxGroup label="Catagory" color="secondary">
                <Checkbox value="Men" onClick={toggleCategory}>
                  Men
                </Checkbox>
                <Checkbox value="women" onClick={toggleCategory}>
                  Women
                </Checkbox>
                <Checkbox value="Electronic" onClick={toggleCategory}>
                  Electronics
                </Checkbox>
                <Checkbox value="jewelery" onClick={toggleCategory}>
                  jewelery
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="flex-1 mt-5 ">
          <div className="flex justify-between mb-10">
            <h2>ALL COLLECTION</h2>

            <select className="border-1  text-sm px-1 outline-none">
              <option value="relevent">Sort by : Relavent</option>
              <option value="low-high">Sort by : Low to High</option>
              <option value="high to low">Sort by : High to low</option>
            </select>
          </div>

          {/* product section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-10">
            {filterProduct.map((productsitem) => (
              <Product
                key={productsitem.id}
                image={productsitem.image}
                price={productsitem.price}
                name={productsitem.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
