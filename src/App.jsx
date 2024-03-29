import { Layout, Form } from "antd";
import { useState } from "react";
import InputList from "./Input.jsx";
import AddList from "./List.jsx";

function TodoList() {
  const [list, setList] = useState([]);
  const [inputList, setInputList] = useState();
  const [edit, setEdit] = useState();

  const onSubmit = () => {
    if (edit != null) {
      const newList = list.map((e,i) => {
        if (i === edit) return inputList;
        return e;
      });
      setList(newList);
      setInputList("");
      setEdit(undefined);
    } else {
      if (inputList.length) setList([...list, inputList]);
      setInputList("");
      console.log(list);
    }
  };

  const onEdit = (index) => {
    const value = list.find((_,i) => i === index);
    if (value) setInputList(value);
    setEdit(index);
  };

  const Delete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <InputList onSubmit={onSubmit} inputList={inputList} setInputList={setInputList}/>
      <AddList onEdit={onEdit} Delete={Delete} list={list}/>
    </div>
  );
}

export default TodoList;
