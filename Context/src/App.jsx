// import React, { useState } from 'react'
// import Navbar from './Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Task from './Task'
// import Cart from './Cart'

// const App = () => {
//   const [apiData, SetApiData] = useState([])
//   const [cart, SetCart] = useState([])
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/task' element={<Task apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path='/cart' element={<Cart cart={cart} SetCart={SetCart}/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Home from './Home'
import Cart from './Cart'
import Navbar from './Navbar'
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App