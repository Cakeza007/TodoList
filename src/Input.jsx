import { Layout, Form } from "antd";

function TodoInput({ onSubmit, inputList, setInputList }) {
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputList}
        onChange={(e) => setInputList(e.target.value)}
        style={{
          color: "black",
          backgroundColor: "white",
          borderRadius: "5px",
          height: "5vh",
          width: "15vw",
        }}
      />
      <button onClick={onSubmit} style={{ marginLeft: "20px" }}>
        Submit
      </button>
    </div>
  );
}

export default TodoInput;
