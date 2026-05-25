import React, { useState } from 'react'
import Submit from "./Submit"
const App = () => {
  let [count, SetCount] = useState(0)
  let [bgcolor, SetColor] = useState("black")
  function green() {
    SetColor("green")
  } 
  function pink() {
    SetColor("pink")
  } 
  function blue() {
    SetColor("blue")
  } 
  function yellow() {
    SetColor("yellow")
  }
  function inc() {
    SetCount(count + 1)
  }
  function dec() {
    SetCount(count - 1)
  }
  return (
    <div style={{ backgroundColor: bgcolor, height: "100vh" }}>
      <h3>{count}</h3>
      <button onClick={dec}>Decrement</button>
      <button onClick={inc}>Increment</button>
      <br />
      <button onClick={green}>Green</button>
      <button onClick={blue}>Blue</button>
      <button onClick={pink}>Pink</button>
      <button onClick={yellow}>Yellow</button>
      <Home/>
      <About/>
      <Contact/>
      <Submit/>
    </div>
  )
}

export const Home = () => {
  return (
    <div>Home</div>
  )
}

export const About = () => {
  return (
    <div>About</div>
  )
}

export const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default App