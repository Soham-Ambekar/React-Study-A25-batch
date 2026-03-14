import { createContext, useEffect, useState } from "react";
import Homme from "./Homme";
import Cart from "./Cart";
import axios from "axios";

export let UserContext = createContext();

let UserProvider = () => {
  let [apiData, setApiData] = useState([]);
  let [cart,setCart]= useState([])
  let [pro,setPro] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/quotes").then((res) => {
      setApiData(res.data.quotes);
    });

     axios.get("https://dummyjson.com/carts").then((res) => {
      setCart(res.data.carts);
    });

     axios.get("https://dummyjson.com/products").then((res) => {
      setPro(res.data.products);
    });
  }, []);



  return (
    <>
      <UserContext.Provider value={{apiData,cart,pro}}>
        <Homme></Homme>
        <Cart></Cart>
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
