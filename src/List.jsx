import { Layout, Form ,Button } from "antd";
import { useState } from "react";

function List({list, Delete, onEdit}) {
  return (
    <Form style={{marginTop:"10px", marginRight:"10px"}}>
      {list.map((e, index) =>{
        return (
          <li key={index}>
            {e}
            <Button onClick={() => onEdit(index)} style={{marginRight:"10px"}}>Edit</Button>
            <Button onClick={() => Delete(index)}>Delete</Button>
          </li>
        )
      })}
    </Form>
  )

}
export default List;
