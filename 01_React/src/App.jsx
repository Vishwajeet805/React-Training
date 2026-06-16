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
// // }

// // export default App

// import React from 'react'
// import Form from './Form'
// const App = () => {
//   return (
//     <div><Form/></div>
//   )
// }

// export default App

// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [city, setcity] = useState("Delhi")
//   const [data, setData] = useState([])


//   useEffect(() => {
//     console.log("hello");
//     async function api() {
//       let res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//       let data = await res.json()
//       console.log(data[0])
//       setData(data)

//     }
//     api()
//   }, [count])


//   useEffect(() => {
//     console.log(city);
//     async function api() {
//       let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       let data = await res.json()
//       console.log(data)
//       setData(data)

//     }
//     api()
//   }, [city])


//   return (
//     <div class="Main">
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Click </button>
//       <br />
//       <br />
//       <h2>{city}</h2>
//       <button onClick={() => { setcity("Jabalpur") }}>Change</button>
//       <br />
//       <br />

//       {/* <h2>Company : {a.company.me}</h2> */}

//     </div>
//   )
// }

// export default App

// import React, { Children, useMemo } from 'react'
// import useCounter from './Counter'

// const App = () => {
//   let { count, inc, dec, reset } = useCounter(0)
//   // function call(){
//   //   let res=0
//   //   for (let i=0;i<100000000;i++){
//   //     res+=i;
//   //   }
//   //   return res
//   // }
//   let total = useMemo(() => {
//     let res = 0
//     for (let i = 0; i < 100000000; i++) {
//       res += i;
//     }
//     return res
//   }, [])
//   return(
//     <div>
//       <h2>{count}</h2>
//       <h3>{total}</h3>
//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//       <button onClick={reset}>Reset</button>
//       <Child />
//     </div>
//   )
// }
// let Child = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

  Array.prototype.mapp=function(cb){
    let res=[]
    for (let i=0;i<this.length;i++)   {
      res.push(cb(this[i],i,this))
    } 
      return res
  }
  Array.prototype.myFilter=function(cb){
    let res=[]
    for (let i=0;i<this.length;i++)   {

      if(cb(this[i],i,this)){
        res.push(this[i])
      }
    } 
      return res
  }
   Array.prototype.myEach=function(cb){
    for (let i=0;i<this.length;i++)   {

      cb(this[i],i,this)
    } 
  }
  Array.prototype.myReduce=function(cb,a=0){
    let res=a
    for (let i=0;i<this.length;i++)   {

      res=cb(res,this[i])
    }
    return res
  }

  let list=[1,2,3,4,5]
  // let data=list.mapp(function(a,b,c){
  //   return a
  // })
  // let data1=list.myFilter(function(a,b,c){
  //   return a>2
  // })
  // let data2=list.myEach(function(a,b,c){
  //   console.log(`${a}`)
  // })
  let data1=list.reduce(function(a,b){
    return a*b
  })
let data2=list.myReduce(function(a,b){
    return a*b
  })


  console.log(data1);
  console.log(data2);
  
  return (
    <div>App</div>
  )
}

export default App