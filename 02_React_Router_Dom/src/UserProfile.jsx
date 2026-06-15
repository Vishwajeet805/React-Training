import React from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = () => {
    let list = ["Vishwajeet", "Shaurya", "Aditya", "Lucky"]
    let { id } = useParams();
    let data = list.find((_, idx) => {
        return id == idx
    })

    return (
        <div>
            <h1 className='bg-amber-500 h-full'>
                Hellooo, {data}
                </h1>
                </div>
    )
}

export default UserProfile