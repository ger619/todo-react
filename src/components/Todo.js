import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

// eslint-disable-next-line react/prop-types
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // eslint-disable-next-line react/prop-types
  return todos.map((todo, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(todo.id)} />
        <TiEdit className="edit-icon" onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>

    </div>
  ));
}
export default Todo;
