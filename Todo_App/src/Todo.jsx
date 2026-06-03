import React from 'react'
import { useState } from 'react'
import "./App.css"
const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const [editIdx, setEditIdx] = useState(null)

    function deleteTodo(idx){
        let prev=todos.filter((a,b)=>{
            return idx!=b
        })
        setTodos(prev)
    }

    function editTodo(idx){
        setInput(todos[idx])
        setEditIdx(idx)
    }

    
    return (
        <div class="Main">
            <h2>Todo List</h2>
            <div>
                <input onChange={(e) => {
                    setInput(e.target.value)
                }} placeholder='Enter a task' type="text" />
                <button onClick={() => {
                    setTodos([...todos, input])
                }}>Add</button>
                </div>
                {todos.map((a,idx) => {
                    return (<div class="Field">
                        <h3>{a}</h3>
                        <div>
                            <button id="green">Edit</button>
                            <button id="red"  onClick={()=> {
                                              deleteTodo(idx)
                                  }}>Delete</button>
                        </div>
                    </div>)
                })
                }
        </div>
    )
}

export default Todo

