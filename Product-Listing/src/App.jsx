import React from 'react'
import Task from './Task'
const App = () => {
  return (
    <div>
      <Task/>
      </div>
  )
}

export default App


import React, { useReducer } from 'react'
import "./App.css"

const Todo = () => {
    let intialData={
        input:"",
        todos:[],
        index:null
    }
    function reducer(state,action){
        if(action.type=="set_input"){
            return{
                ...state,input:action.payload
            }
        }else if(action.type=="add_TODO"){
            return{
                todos:[...state.todos,state.input],
                index:action.payload
            }
        }else if(action.type=="edit_TODO"){
            return{
                ...state,
                input:state.todos[action.payload],
                index:action.payload
            }
        }else if(action.type=="update_TODO"){
            let updatetodo=[...state.todos]
            updatetodo[state.index]=state.input
            return{
                ...state,
                todos:updatetodo,
                input:" ",
                index:null
            }
        }else if(action.type=="delete_TODO"){
            return{
                ...state,
                todos:state.todos.filter((_,id)=>{
                    return id!==action.payload
                })
            }
        }

    }
    let [state,disptach]= useReducer(reducer,intialData)
    function handleSubmit(){
        if(state.index!==null){
            disptach({type:"update_TODO"})
        }else{
            disptach({type:"add_TODO"})
        }
    }
  return (
    <div class="Main">
        <h2>Todo List</h2>
        <div>
        <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
        <button onClick={handleSubmit}>{state.index!==null?"Update":"Add"}</button>
        </div>
        {
            state.todos.map((a,b)=>{
                return(<div class="Field">
                <h3>{a}</h3>
                <button id="green" onClick={()=>disptach({type:"edit_TODO", payload:b})}>Edit</button>
                <button id="red" onClick={()=>disptach({type:"delete_TODO",payload:b})}>Delete</button>
                </div>)
            })
        }
    </div>
  )
}

export default Todo