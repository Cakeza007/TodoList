//text edit delete


import { Layout, Form } from "antd";
import { useState } from "react";

function List({List, Delete, onEdit}) {
return (
  <div>
    {List.map((e, index) => {
      return (
        <li key={index}>
          {e}
          <button onClick={() => onEdit(index)} style={{marginLeft: "20px"}}>Edit</button>
          <button onClick={() => Delete(index)} style={{marginLeft: "20px" , marginTop: "20px"}}>Delete</button>
        </li>
      );
    })}
  </div>
);
}
export default List;
