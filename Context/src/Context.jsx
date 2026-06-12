import { createContext, useContext, useReducer } from "react";

let Con = createContext()

export default Con
let data = {
    apiData: [],
    cart: []
}

const Context = ({ children }) => {
    const [ state, dispatch ] = useReducer(reduser, data)
    function reduser(state, action) {
        if (action.type == "add_Data") {
            return {
                ...state,
                apiData: action.payload
            }
        }else if (action.type == "addtoCart") {
            return {
                ...state,
                cart:[ ...state.cart ,action.payload]
            }
        }
    }
    return (
        <Con.Provider value={{state,dispatch}}>
            {children}
            </Con.Provider>
    )
}
export {Context}