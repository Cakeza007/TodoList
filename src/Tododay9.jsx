import { useState } from "react";


function TodoListday9() {
  const [List, setList] = useState([]);
  const [Input, setInput] = useState("");
  const [edit, setEdit] = useState(null);

//   const onSubmit = () => {
//     if (edit) {
//       const newList = List.map((e, i) => {
//         if (i === edit) return inputValue;
//         return e;
//       });
//       setList(newList);
//       setInput("");
//       setEdit(undefined);
//     } else {
//       if (inputValue.length) setList([...list, inputValue]);
//       setInputValue("");
//     }
//   };


  const onChange = (even) => {
    setInput(even.target.value);
  };

  const AddTodo = () => {
    if (Input.trim() !== "") {
      setList([...List, { id: Date.now(), text: Input }]);
      setInput("");
    }
  };

  const DeleteTodo = (id) => {
    const newList = List.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const editList = (id) => {
    const todo = List.find((item) => item.id === id);
    if (todo) {
      setInput(todo.text);
      setEdit(id);
    }
  };

  const UpdateTodo = () => {
    if (editList !== null) {
      const updatedList = List.map((item) =>
        item.id === edit ? { ...item, text: Input } : item
      );
      setList(updatedList);
      setEdit(null);
      setInput("");
    }
  };

  return (
    <div >
      <h1>Todo List</h1>
      <input type="text" value={Input} onChange={onChange} />
      <button onClick={AddTodo}>Add</button>
      <button onClick={UpdateTodo}>Save</button>

      <ul>
        {List.map((todo, index) => (
          <div key={index}>
            {todo.text}
            <button onClick={() => editList(todo.id)}>Edit</button>
            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoListday9;
