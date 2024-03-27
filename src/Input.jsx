//ช่อง input กับปุ่ม submit


import { Layout, Form } from "antd";
import { useState } from "react";

function TodoInput({addTodo, news, setNews}) {

return (
  <div>
    <h1>Todo List</h1>
    <input
     type="text"
     value={news}
     onChange={(e) => setNews(e.target.value)}
     placeholder="Create a new List"
    />
    <button onClick={addTodo}>Submit</button>
  </div>
);
}

export default TodoInput;
