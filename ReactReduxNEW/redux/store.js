/*
todosReducer is added to the store, which will handle actions like addTodo and removeTodo.
The Redux store is now set up, and React components can connect to it via useSelector to read state and useDispatch to dispatch actions.
*/
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
