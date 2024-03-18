import { useState } from "react";

function TodoList() {
    const [List, setList] = useState([]);
    const [input, setinput] = useState('');
    const [edidList, seteditList] = useState(null);

    const inputChange = (event) => {
        setinput(event.target.value);
    };

    const AddTodo = () => {
        setList([...List, { id: Date.now(), text: input }]);
        setinput('');
    };

    const DeleteTodo = (id) => {
        setList(List.filter((List) => List.id !== id));
    };

    const EditTodo = (index) => {
        const value = List.find((List) => List.id === index);
        if (value) setinput(value);
        seteditList(index);
    };

    // const SaveEdit = () => {
    //     if (input.find() !== '') {
    //         const newTodos = [...todos];
    //         newTodos[edidList] = inputValue;
    //         setTodos(newTodos);
    //         seteditList(null);
    //         setinput('');
    //     }
    // };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={inputChange}
            />
            <button onClick={AddTodo}>Add</button>
            <ul>
                {List.map((todo, index) => (
                    <div key={index}>
                        {todo.text}
                        <button onClick={() => DeleteTodo(List.id)}>Delete</button>
                        <button onClick={() => EditTodo(index)}>Edit</button>
                    </div>
                ))}
            </ul>
        </div>
    );

}

export default TodoList;