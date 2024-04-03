import { Form, Button } from "antd";
import { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

function List({ list, onEdit, Delete }) {
  return (
    <Form style={{ marginTop: "10px", marginRight: "10px" }}>
      {list.map((e, index) => {
        return (
          <li key={index}>
            {e}
            <Button
              onClick={() => onEdit(index)}
              style={{ marginRight: "10px" }}
            >
              <EditFilled />
            </Button>
            <Button
              onClick={() => Delete(index)}
              style={{ marginRight: "10px", marginTop: "10px" }}
            >
              <DeleteFilled style={{ color: "red" }} />
            </Button>
          </li>
        );
      })}
    </Form>
  );
}
export default List;
