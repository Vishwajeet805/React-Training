import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Task = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  async function apiCall() {
    if (!search.trim()) {
      return;
    }
    let res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    let data = await res.json();
    console.log(data);
    setProduct(data.products)
  }
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data.products);
      });
  }, []);
  function priceHigh() {
    let sortdata = [...product].sort((a, b) => {
      console.log(a, b)
      return a.price - b.price
    })
    setProduct(sortdata)
  }
  function priceLow() {
    let sortdata = [...product].sort((a, b) => {
      return b.price - a.price
    })
    setProduct(sortdata)
  }
  function rateHigh() {
    let sortdata = [...product].sort((a, b) => {
      console.log(a, b)
      return a.price - b.price
    })
    setProduct(sortdata)
  }
  function rateLow() {
    let sortdata = [...product].sort((a, b) => {
      return b.price - a.price
    })
    setProduct(sortdata)
  }
  console.log(product);
  return (
    <div>
      <div class="Head">
        <div>
          <input value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={apiCall}>Click</button>
        </div>
        <div class="Filter">
          <div>
            <h4>Price</h4>
            <button onClick={priceHigh}>High</button>
            <button onClick={priceLow}>Low</button>
          </div>
          <div>
            <h4>Rating</h4>
            <button onClick={rateHigh}>High</button>
            <button onClick={rateLow}>Low</button>
          </div>
        </div>
      </div>
      <div class="carde">
        {product.map((a) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
