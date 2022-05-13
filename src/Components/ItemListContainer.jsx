import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import promises  from "./MyUtilities/promises";
import products  from "./MyUtilities/products";
import ItemList from "./ItemList";
import s from "./item.module.css";


export default function ItemListContainer() {
const [items, setItems] = useState([]);

useEffect(() => {
  promises(3000, products)
  .then(res => setItems(res))
.catch(error => console.log (error));

}, [items])


  return (
  
      <div className = {s.myCards} >
        <ItemList products ={items}/>
      </div>
       
  )
}

