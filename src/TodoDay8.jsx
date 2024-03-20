import React, { useState } from "react";

function TodoDay8() {
  const [List, setList] = useState([]);
  const [input, setinput] = useState("");
  const [edit, setedit] = useState(null);

  const listChange = (even) => {
    setinput(even.target.value);
  };

  const AddTodo = () => {
    if (input.trim() !== "") {
      setList([...List, { id: Date.now(), text: input }]);
      setinput("");
    }
  };

  const DeleteTodo = (id) => {
    const newList = List.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const editList = (id) => {
    const todo = List.find((item) => item.id === id);
    if (todo) {
      setinput(todo.text);
      setedit(id);
    }
  };

  const UpdateTodo = () => {
    if (editList !== null) {
      const updatedList = List.map((item) =>
        item.id === edit ? { ...item, text: input } : item
      );
      setList(updatedList);
      setedit(null);
      setinput("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} onChange={listChange} />
      <button onClick={AddTodo}>Add</button>
      <button onClick={UpdateTodo}>Save</button>

      <ul>
        {List.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => editList(todo.id)}>Edit</button>
            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoDay8;
