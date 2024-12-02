import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Fetching  data

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((Data) => {
        setdata(Data);
      })
      .catch((Error) => {
        console.error(`Error fetching :`, Error);
      });
  }, []);

  return (
    <ShopContext.Provider value={{ data }}>{children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
