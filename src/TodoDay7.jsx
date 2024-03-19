import { useState } from "react";
import './App.css'

function TodoList () {

    const [List , setList] = useState([]);
    const [input, setinput] = useState('');
    const [editList ,seteditList] = useState (null);

    const InputChange = (event) => {
        setinput(event.target.value);
    };

    const AddTodo = () => {
        if (input.trim() !== '') {
            setList([...List, { id: Date.now(), text: input }]);
            setinput('');
        }
    };

    const DeleteTodo = (id) => {
        const newList = List.filter((todo) => todo.id !== id);
        setList(newList);
    };

    const EditTodo = (id) => {
        const todo = List.find((item) => item.id === id);
        if (todo) {
            setinput(todo.text);
            seteditList(id);
        }
    };

    const UpdateTodo = () => {
        if (editList !== null) {
            const updatedList = List.map((item) =>
                item.id === editList ? { ...item, text: input } : item);
            setList(updatedList);
            seteditList(null);
            setinput('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={InputChange}
            />
            <button onClick={AddTodo}>Add</button>
            <button onClick={UpdateTodo}>Save</button>

            <ul>
                {List.map((todo, index) => (
                    <div key={index}>
                        {todo.text}
                        <button onClick={() => EditTodo(todo.id)}>Edit</button>
                        <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;
