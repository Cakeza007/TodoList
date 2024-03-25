import { Layout, Form } from "antd";
import { useState } from "react";
import Input from "./Input.jsx";
import AddList from "./List.jsx";

function TodoList() {
  // const [List, setList] = useState([]);
  // const [InputList, setInputList] = useState();
  // const [Edit, setEdit] = useState();

  



  return (
    <>
      <Input />
      <AddList />
    </>
  );
}

export default TodoList;
