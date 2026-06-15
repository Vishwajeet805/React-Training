// import React from 'react'
// import Navbar from './Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Task from './Task'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/task' element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserList from './UserList'
import UserProfile from './UserProfile'
import "./App.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList/>} />     
        <Route path="/profile/:id" element={<UserProfile/>} />     
      </Routes>
      
    </div>
  )
}

export default App
