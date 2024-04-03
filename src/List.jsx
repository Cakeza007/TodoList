import { Form, Button } from "antd";
import { useState } from "react";

function List({ list, Delete, onEdit }) {
  return (
    <div>
      {list.map((e, index) => {
        return (
          <li key={index}>
            {e}
            <Button onClick={() => onEdit(index)} style={{marginLeft: "12px" , marginTop: "12px"}}>Edit</Button>
            <Button onClick={() => Delete(index)} style={{marginLeft: "12px" , marginTop: "12px"}}>Delete</Button>
          </li>
        );
      })}
    </div>
  );
}
export default List;
