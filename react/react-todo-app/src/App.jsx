import { useState } from "react";
import "./App.css";

function App() {
  // todos --> []
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  // todo -> {title: "", description : "", completed : false, id: "unique id"}

  function handleFormSubmit(e) {
    e.preventDefault();

    //
    const todoObj = {
      title: todoTitle,
      description: todoDesc,
      completed: false,
      id: Date.now(),
    };

    setTodos([...todos, todoObj]);
  }

  return (
    <>
      <div className="min-h-screen bg-neutral-900 text-white p-4">
        <h1 className="text-center text-4xl font-bold py-4">Todo App📄</h1>
        <form
          onSubmit={handleFormSubmit}
          className="w-2xl mx-auto flex flex-col gap-8 p-8 border rounded-2xl"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="title">Enter Todo Title</label>
            <input
              className="border-2 px-4 py-2 rounded-md"
              type="text"
              placeholder="Todo title"
              id="title"
              required
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="description">Enter Todo Description</label>
            <input
              className="border-2 px-4 py-2 rounded-md"
              type="text"
              placeholder="Todo description"
              id="description"
              required
              value={todoDesc}
              onChange={(e) => setTodoDesc(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="bg-green-600 px-4 py-2 rounded-md">
              Add Todo
            </button>
          </div>
        </form>

        <div className="py-4">
          <h2 className="text-center text-3xl font-bold py-4">All todos</h2>
          <div className="grid grid-cols-5 gap-3">
            {/* todo array --> div */}

            {todos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="max-w-xs border p-2 flex flex-col items-start gap-2 rounded-xl"
                >
                  <p className="text-xl ">{todo.title}</p>
                  <p className="text-neutral-500">{todo.description}</p>
                  <div className="flex gap-2">
                    <button className="font-bold border border-red-500 text-red-400 bg-red-100 py-2 px-4 rounded-sm">
                      Delete
                    </button>
                    <button className="font-bold border border-green-500 text-green-400 bg-green-100 py-2 px-4 rounded-sm">
                      Mark as complete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
