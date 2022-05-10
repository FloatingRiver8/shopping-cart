import React from 'react'
import { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    function myCount() {

        if (count < stock) {
            setCount(count + 1)
        }
    }
    function subsCount() {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    function onAdd() {
        alert( count + " item(s) in your cart");
      }


    return (
        <>
            <button onClick={subsCount}>-</button>
            {count}
            <button onClick={myCount}>+</button>
            <br></br>
            <br></br>
            <button onClick={onAdd}>llevar items</button>
        </>
    )
}
