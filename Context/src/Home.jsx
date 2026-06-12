import { useEffect } from 'react'
import React, { useContext } from 'react'
import Con from './Context'

const Home = () => {
  let { state, dispatch } = useContext(Con)
  // console.log(state, "statetetetetetet");



  useEffect(() => {
    async function call() {
      let res = await fetch("https://dummyjson.com/products")
      let data = await res.json()
      console.log(data.products, "'he");
      dispatch({ type: "add_Data", payload: data.products })

    }
    call()


    
  }, [])
  return (
    <div class="carde">
      {state.apiData.map((a, idx) => (
        <div
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
          <button onClick={() => dispatch({ type: "addtoCart", payload: a }) }>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Home