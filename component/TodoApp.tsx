import { useState } from "react";
import Todo from "./Todo";

/**
 * Specifying type of the object we are accepting in todo array;
 */
type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const AddTodo = () => {
    if (!input.trim()) return;
    const newTodos = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodos]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <>
      <div className=" flex flex-col items-center align-top justify-start p-20 gap-20 bg-black min-h-screen item-baseline">
        <div className="max-w-[500px] w-[90%] bg-transparent p-4 border-2 border-amber-50 h-24 rounded-xl align-top ">
          <h1 className="text-white text-center text-5xl">
            To do list for the day
          </h1>
        </div>
        <div className="flex flex-row gap-10">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-sm  border border-gray-500 rounded-xl bg-gray-700 placeholder-gray-400 p-3 text-white focus-within:border-b-white"
            type="text"
            placeholder="Write next task"
          />
          <button
            className="bg-orange-400 p-6 rounded-full cursor-pointer hover:bg-orange-600"
            onClick={AddTodo}
          >
            ➕
          </button>
        </div>

        <div className="container max-w-[500px]">
          <h1 className="text-white font-bold text-center">Todos</h1>
          {todos.map((todo) => {
            return (
              <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
