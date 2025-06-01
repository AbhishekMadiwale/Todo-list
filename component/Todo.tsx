// import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

type TodoProp = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  completeTodo : (id: number) => void;
};

function Todo({ todo, completeTodo } : TodoProp) {
  return (
    <div className="bg-gray-700 text-white font-bold p-5 my-5 rounded-xl flex justify-between items-center">
      <p>{todo.text}</p>
      <div className="flex gap-10 items-center cursor-pointer">
        <FaCheckCircle 
          className="hover:text-gray-500" 
          onClick={() => completeTodo(todo.id)}
          />
        <FaTrash className="hover:text-gray-500" />
      </div>
    </div>
  );
}

export default Todo;
