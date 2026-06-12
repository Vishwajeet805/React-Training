import React from 'react'
import './App.css'
import { useContext } from 'react'
import Con from './Context';
const Cart = () => {
  let { state, dispatch } = useContext(Con)
      console.log(state, "statetetetetetet");

  return (
    <div class="carde">
        {state.cart.map((a,idx)=>{
          return(<div
            key={a.id}
            class="card"
          >
            <img
              src={a.images[0]}
              alt={a.title}
            />

            <h2>ID : {a.id}</h2>
            <h2>Name : {a.title}</h2>
            <h2>Brand : {a.brand}</h2>
            <h2>Price : ₹{a.price}</h2>
            <h2>Rating : ⭐ {a.rating}</h2>
            
          </div>)
        })
      }
    </div>
  )
}

export default Cart