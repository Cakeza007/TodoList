import { Form, Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

function List({ list, onEdit, Delete }) {
  return (
    <div>
      {list.map((e, index) => {
        return (
          <li key={index}>
            {e}
            <Button
              onClick={() => onEdit(index)}
              style={{ marginRight: "10px", marginLeft: "10px" }}
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
    </div>
  );
}
export default List;
