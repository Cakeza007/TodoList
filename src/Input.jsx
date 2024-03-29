import { Layout, Form, Button, Input } from "antd";

function TodoInput({ onSubmit, inputList, setInputList }) {



  return (
    <Form onFinish={onSubmit}>
      <h1>Todo List</h1>
      <Form.Item>
      <Input
        type="text"
        value={inputList}
        onChange={(e) => setInputList(e.target.value)}
        style={{width: "500px"}}
      >
      </Input>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TodoInput;
