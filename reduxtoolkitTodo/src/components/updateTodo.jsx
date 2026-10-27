import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

function UpdateTodo({ todoId }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todoId, text }));
    setText("");
  };
  return (
    <form onSubmit={updateTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Update Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Update Todo
      </button>
    </form>
  );
}

export default UpdateTodo;
