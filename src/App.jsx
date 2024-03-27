import { Layout, Form, Button } from "antd";
import { useState } from "react";
import Input from "./Input.jsx";
import AddList from "./List.jsx";

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
      
    }

  };
  console.log(List);

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
    <div >
    <div>
      <Input addTodo={OnSubmit} news={InputList} setNews={setInputList} />
    </div>
    <div>
      <AddList todos={List} remove={Delete} edit={onEdit} />
    </div>
  </div>
  );
}

export default TodoList;
