//text edit delete


import { Layout, Form } from "antd";
import { useState } from "react";

function TodoList() {
  const [InputList, setInputList] = useState();
  const [Edit, setEdit] = useState();
  const [List, setList] = useState([]);

  const onEdit = (index) => {
    const value = List.find((_, i) => i === index);
    if (value) setInputList(value);
    setEdit(index);
  };

  const Delete = (index) => {
    const newList = List.filter((_, i) => i !== index);
    setList(newList);
  };


return (
  <div>
    {List.map((e, index) => {
      return (
        <li key={index}>
          {e}
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => Delete(index)}>Delete</button>
        </li>
      );
    })}
  </div>
);
}
export default TodoList;
