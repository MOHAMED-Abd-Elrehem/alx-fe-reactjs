import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
const Todo = () => {
    const [todos, setTodos] = useState([{ id: 1, text: 'Learn Nod.js', completed: true }, { id: 2, text: 'Learn React Css FrameWorks', completed: false }],);
    const handleAddTodo = (text) => {
        const newTodos = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodos])
    };
    const handleToggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <AddTodoForm onAddTodo={handleAddTodo} />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <button onClick={handleDeleteTodo(todo.id)}>Deleted</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;