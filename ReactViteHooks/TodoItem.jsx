import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}> {/* Use className */}
      {todo.text}
      <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;