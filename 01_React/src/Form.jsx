import React, { useState } from "react";
import "./App.css";
const Form = () => {
    const [input, setinput] = useState({
        name:"",
        email:"",
        passWord:""
    })
    function fun(e){
        let{name,value}=e.target
        setinput({...input,[name]:value})
        console.log(input)
    }
  return (
    <div id="body">
      <form id="form">
        <input type="text" name="name" onChange={fun} value={input.name} placeholder="Enter your name" />
        <br />
        <input type="email" name="email" onChange={fun} value={input.email} placeholder="Enter your email" />
        <br />
        <input type="password" name="passWord" onChange={fun} value={input.passWord} placeholder="Enter your password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
