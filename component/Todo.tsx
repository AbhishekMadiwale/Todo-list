// import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

type TodoProp = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void; 
};

function Todo({ todo, completeTodo, deleteTodo }: TodoProp) {
  return (
    <div className="bg-gray-700 text-white font-bold p-5 my-5 rounded-xl flex justify-between items-center">
      <p className={todo.completed === true ? "line-through decoration-red-800 decoration-4" : " "}>
        {todo.text}
      </p>
      <div className="flex gap-10 items-center cursor-pointer">
        <FaCheckCircle
          className={todo.completed === true ? "text-green-800 cursor-not-allowed" :"hover:text-green-800"}
          onClick={todo.completed ? undefined : () => completeTodo(todo.id)}
        />
        <FaTrash className="hover:text-red-600"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
