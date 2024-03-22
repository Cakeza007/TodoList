import { Layout } from "antd";
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
    <Layout style={{backgroundColor: 'red'}}>
        <h1>Todo List</h1>
      <input 
      value={InputList} 
      onChange={(e) => setInputList(e.target.value)}
      color="red"
      style={{ display: 'flex', alignItems: 'center', backgroundColor:'red' }}
      />
      <button onClick={OnSubmit}>Submit</button>

      <div>
        {List.map((e, index) => {
          return (
            <div key={index}>
              {e}
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => Delete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default TodoList;
