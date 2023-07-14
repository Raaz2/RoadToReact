import { useState } from "react";
import "./AddTodo.css"; // Import the CSS file

export default function AddTodo({ handleAddTodo }) {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    setErrorMessage("");
  };

  const onClick = () => {
    if (text === "") {
      setErrorMessage("Please write something to add.");
    } else {
      handleAddTodo(text);
      setText("");
    }
  };

  return (
    <div className="add-todo-container">
      <span className="add-todo-error">{errorMessage}</span>
      <br />
      <input
        className="add-todo-input"
        value={text}
        onChange={handleChange}
        placeholder="Add something"
      />
      <button className="add-todo-btn" onClick={onClick}>
        Add
      </button>
    </div>
  );
  
}
