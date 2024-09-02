import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <h1 className="text-3xl pt-4">Your Todos</h1>
      <div className="p-5 flex items-center justify-center">
        <input
          type="text"
          className="rounded-tl-sm rounded-bl-sm px-3 outline-none text-[#F86F03] duration-150 bg-[#FFF6F4] py-1.5"
          value={input}
          placeholder="Enter your todo..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="pl-4 pr-4 pt-0.5 pb-0.5 bg-[#F86F03] text-xl rounded-tr-sm rounded-br-sm hover:bg-[#FFF6F4] hover:text-[#F86F03] hover:duration-250"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
