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
      const newList = list.map((e, i) => {
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
    const value = list.find((_, i) => i === index);
    if (value) setInputList(value);
    setEdit(index);
  };

  const Delete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <Layout
      style={{
        backgroundColor: "#7774a3",
        height: "100vh",
        width: "100vw",
       
      }}
    >
      <div>
        <InputList
          onSubmit={onSubmit}
          inputList={inputList}
          setInputList={setInputList}
        />
      </div>
      <div>
        <AddList list={list} Delete={Delete} onEdit={onEdit} />
      </div>
    </Layout>
  );
}

export default TodoList;
