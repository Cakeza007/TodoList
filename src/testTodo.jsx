import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const AddTodo = () => {
    if (inputValue.find() !== '') {
      setTodos([...todos, inputValue]);      
      setInputValue('');
    }
  };

  const DeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const EditTodo = (index) => {    //เพื่อบอกว่า todo ที่ถูกคลิกเพื่อแก้ไขอยู่ที่ index ไหน และกำหนดค่า inputValue เป็นค่าของ todo ที่กำลังถูกคลิกเพื่อแก้ไข
    setEditIndex(index);            //list ที่จะทำการแก้ไข
    setInputValue(todos[index]);              
  };

  const SaveEdit = () => {
    if (inputValue.find() !== '') {
      const newTodos = [...todos];   //สร้างรายการใหม่
      newTodos[editIndex] = inputValue;  //อัพเดตค่าที่ใส่เข้ามา
      setTodos(newTodos);  //อัพเดตเพื่อพันทึกการเปลี่ยนแปลง
      setEditIndex(null);  //รีเซ็ตเป็นค่าว่าง
      setInputValue('');  //รีเป็นค่าว่างเพื่อใช้งานครั้งต่อไป
    }
  };

  return (
    <div className='box-todo-container'>
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={InputChange}
      />
      {editIndex === null ? (
        <button onClick={AddTodo}>Add</button>
      ) : (
        <button onClick={SaveEdit}>Save</button>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>                     
            {editIndex === index ? (       //กล่องแก้ไขข้อความในบรรทัด list
              <input
                type="text"
                value={inputValue}
                onChange={InputChange}
                
              />
            ) : (
              <>
                {todo}
                <button onClick={() => EditTodo(index)}>Edit</button>
                <button onClick={() => DeleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>

        <div><button>Hello</button></div>

    </div>

    

  );
}

export default TodoList;
