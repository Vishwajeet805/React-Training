import React from 'react'
import './App.css'
const Cart = ({cart,SetCart}) => {
    function deleteItem(idx){
    const prev=[...cart]
    prev.splice(idx,1)
    SetCart(prev)
  }
  return (
    <div class="carde">
          {
        cart.map((a,idx)=>{
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
            <button onClick={()=>deleteItem(idx)}>Remove</button>
          </div>)
        })
      }
    </div>
  )
}

export default Cart