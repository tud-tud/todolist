import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

import List from "./components/List";

const App = () => {
  const [name,setName] = useState('')
  const [list,setList] = useState([])

  const submitData=(e) =>{
    e.preventDefault()
    const newItem ={
      id: uuidv4(),
      title: name
    }
    setList([...list,newItem])
    setName('')

    console.log(newItem);
  }

  return (
    <section className="container">
      <h1>TodoList App</h1>
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            placeholder="What you need to do?"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
          <button type="sub" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data,index)=>{
          return(
            <List key={index} {...data} />
          )
        })}
      </section>
    </section>
  );
};

export default App;
