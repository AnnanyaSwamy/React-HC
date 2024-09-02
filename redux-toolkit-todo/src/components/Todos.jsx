import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  completeTodo,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <ul className="list-none pb-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-[#F86F03] flex items-center p-1.5 mb-2 rounded-sm"
        >
          <span className="flex-grow">{todo.text}</span>
          <button
            className=" text-white px-2 rounded ml-auto"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
