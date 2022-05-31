import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  return (
    <form className="todo-form" onSubmit={submitHandle}>
      <input className="todo-input" type="text" placeholder="Add a Todo List" value={input} name="text" onChange={handleChange} />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
