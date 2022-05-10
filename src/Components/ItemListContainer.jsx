import React from "react";
import ItemCount from './ItemCount';

export default function ItemListContainer() {



  return (

    <div>
      <h2>Aquí irá mi catálogo de productos</h2>
      <ItemCount initial={1} stock={5}  />
    </div>


  )
}
