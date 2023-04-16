import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import List from "./components/list";
import Alert from "./components/Alert";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [checkeditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: true, msg: "Please, add a message.", type: "error" });
    } else if (checkeditItem && name) {
      // update edit list
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(result);
      setName("");
      setCheckEditItem(false);
      setEditId(null);
      setAlert({ show: true, msg: "Edit Todo complete.", type: "seccess" });
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      setAlert({ show: true, msg: "Add Todo complete.", type: "seccess" });
    }
  };

  const removeItem = (id) => {
    console.log(id);
    const result = list.filter((item) => item.id !== id);
    setList(result);
    setAlert({ show: true, msg: "Delete Todo Complete.", type: "error" });
  };

  const editItem = (id) => {
    setCheckEditItem(true);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };

  return (
    <section className="container">
      <h1>TodoList App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            placeholder="What you need to do?"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="sub" className="submit-btn">
            {checkeditItem ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data, index) => {
          return (
            <List
              key={index}
              {...data}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </section>
    </section>
  );
};

export default App;
