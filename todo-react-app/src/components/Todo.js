import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoSingleItem";
import "./Todo.css"; // Import the CSS file

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };

    const afterAdding = [...todos, newItem];
    setTodos(afterAdding);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const afterDeletion = todos.filter((todo) => todo.id !== id);

    setTodos(afterDeletion);
  };

  return (
    <div className="todo-container">
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <li key={item.id} className="todo-item">
            <div className="title">{item.title}</div>
            <div className="status">
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => handleToggle(item.id)}
              />
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
