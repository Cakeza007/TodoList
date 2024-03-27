import { Layout, Form } from "antd";

function TodoInput({ onSubmit, InputList, setInputList }) {
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={InputList}
        onChange={(e) => setInputList(e.target.value)}
        placeholder="Create a new List"
      />
      <button onClick={onSubmit} style={{marginLeft: "20px"}}>Submit</button>
    </div>
  );
}

export default TodoInput;
