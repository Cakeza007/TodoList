import { Form, Button, Input } from "antd";

function TodoInput({ onSubmit, inputList, setInputList }) {
  return (
    <Form>
      <h1>Todo List</h1>
      <Input
        type="text"
        value={inputList}
        onChange={(e) => setInputList(e.target.value)}
        style={{width:"500px"}}
      ></Input>
      <Button onClick={onSubmit} style={{ marginLeft: "20px" }}>Submit</Button>
    </Form>
  );
}
export default TodoInput;
