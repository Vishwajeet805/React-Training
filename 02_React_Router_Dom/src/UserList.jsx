import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    let list = ["Vishwajeet", "Shaurya", "Aditya", "Lucky"]
    let navigate=useNavigate()
    function fun(id){
        navigate(`/profile/${id}`)
        
    }
    return (
        <div>
            {
                list.map((a,id) =>{
                     return(
                    <>
                        <li>{a}</li>
                        <button onClick={()=>{fun(id)}}>Show</button>
                    </>)
                })

            }

        </div>
    )
}

export default UserList