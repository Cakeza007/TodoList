//text edit delete
import { Layout, Form } from "antd";
import { useState } from "react";

function ListEdit({todos, remove, edit}) {


return (
  <div>
    {todos.map((List, index) => {
      return (
        <li key={index}>
          <span>{List}</span>
          <button onClick={() => edit(index)}>Edit</button>
          <button onClick={() => remove(index)}>Delete</button>
        </li>
      );
    })}
  </div>
);
}
export default ListEdit;
