import React from "react";
import "./TodoSingleItem.css"; // Import the CSS file

export default function TodoItem({
    id,
    title,
    status,
    handleDelete,
    handleToggle
  }) {
    return (
        <li className="todo-item">
          <span className="title">
            {title} - {status ? "Completed" : "Not Completed"}
          </span>
          <button className="toggle-btn" onClick={() => handleToggle(id)}>
            Toggle
          </button>
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      );
      
  }
  