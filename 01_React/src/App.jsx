// import React, { useState } from 'react'
// import Submit from "./Submit"
// import New from './New'
// // import { About } from './New'

// // let [count, SetCount] = useState(0)
// // let [bgcolor, SetColor] = useState("black")
// // function green() {
// //   SetColor("green")
// // } 
// // function pink() {
// //   SetColor("pink")
// // } 
// // function blue() {
// //   SetColor("blue")
// // } 
// // function yellow() {
// //   SetColor("yellow")
// // }
// // function inc() {
// //   SetCount(count + 1)
// // }
// // function dec() {
// //   SetCount(count - 1)
// // }

// {/* <h3>{count}</h3>
//       <button onClick={dec}>Decrement</button>
//       <button onClick={inc}>Increment</button>
//       <br />
//       <button onClick={green}>Green</button>
//       <button onClick={blue}>Blue</button>
//       <button onClick={pink}>Pink</button>
//       <button onClick={yellow}>Yellow</button> */} const App = () => {
//   let data = "hello"
//   let [count, SetCount] = useState(0)
//   let [time,SetTime]=useState(0)
//   function inc() {
//     SetCount(count + 1)
//   }
//   function dec() {
//     SetCount(count - 1)
//   }
//   function state(val){
//     if(val=="start"){
//     setInterval(() => {
//                 SetTime((time) => time + 10);
//             }, 10);
//   }else{
//     return
//   }
// }
//   function stop(){
//     return
//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={dec}>Decrement</button>
//       <button onClick={inc}>Increment</button>
//       <h3>{time}</h3>
//       <button onClick={state(start)}>Start</button>
//       <button onClick={state}>Stop</button>
//       <Home />
//       {/* <New a={data} /> */}
//       {/* <About/> */}
//       <Contact />
//       <Submit />
//     </div>
//   )
// }

// export const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// // export const About = () => {
// //   return (
// //     <div>About</div>
// //   )
// // }

// export const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [title, setTitle] = useState(" ")
//   const [text, setText] = useState(" ")
//   function fun(e){
    
//     setTitle(e.target.value)
//   }
//   function dta(){
//     setText(title)
//     setTitle("")
//   }

//   return (
//     <div>
//     <h1>{text}</h1>
//     <input type="text" value={title} onChange={fun} />
//     <button onClick={dta}>Click Me</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Form from './Form'
const App = () => {
  return (
    <div><Form/></div>
  )
}

export default App