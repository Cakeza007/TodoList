//ช่อง input กับปุ่ม submit


import { Layout, Form } from "antd";
import { useState } from "react";

function TodoList() {
  const [List, setList] = useState([]);
  const [InputList, setInputList] = useState();
  const [Edit, setEdit] = useState();

  const OnSubmit = () => {
    if (Edit != null) {
      const newList = List.map((e, i) => {
        if (i === Edit) return InputList;
        return e;
      });
      setList(newList);
      setInputList("");
      setEdit(undefined);
    } else {
      if (InputList.length) setList([...List, InputList]);
      setInputList("");
      console.log(List);
    }
  };


return (
  <div>
    <h1>Todo List</h1>
    <input
      value={InputList}
      onChange={(e) => setInputList(e.target.value)}
      placeholder="Create a new List"
    />
    <button onClick={OnSubmit}>Submit</button>
  </div>
);
}

export default TodoList;
