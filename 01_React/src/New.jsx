import React from 'react'
import A from'./A'
const New = ({a}) => {
    console.log(a);
    
  return (
    <div>{a}
    <A b={a}/>
    </div>
  )
}
// const About = () => {
//   return (
//     <div>About</div>
//   )
// }
// export {About}
export default New