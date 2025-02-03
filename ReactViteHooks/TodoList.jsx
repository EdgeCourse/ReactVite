import React, { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {state.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;