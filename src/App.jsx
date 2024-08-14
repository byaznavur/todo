import { useState, useRef, useEffect } from "react";
import ListItem from "./UI/Lists/ListItem";

const App = () => {
  const inputRef = useRef(""); // inputdan qiymatni olish uchun

  const [todos, setTodos] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todos")) || [
        { id: 1, title: "Reading books", done: false },
      ]
    );
  });

  // todos o'zgarganda, localStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: inputRef.current.value,
      done: false,
    };

    if (newTodo.title.trim().length) {
      setTodos([...todos, newTodo]);
      inputRef.current.value = ""; // Input maydonini tozalash
    } else {
      alert("Enter a task title");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    const doneTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: true };
      }
      return todo;
    });

    setTodos(doneTodos);
  };

  return (
    <div className="container mx-auto">
      <div className="wrapper mx-auto w-[800px] mt-8 bg-orange-400 p-2">
        <div className="todo">
          <h2 className="text-center py-2 font-semibold my-3">MY TODO APP</h2>

          <div className="todo-header flex gap-2 p-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter task"
              className="grow focus:outline-none py-2 ps-4 rounded-lg focus:shadow-lg"
            />
            <button
              onClick={addTodo}
              className="bg-black text-white px-2 rounded-md active:bg-orange-400 font-semibold"
            >
              Add new Task
            </button>
          </div>

          <div className="todo-body py-2 my-3">
            <ul>
              {todos.length ? (
                todos.map((todo, i) => (
                  <ListItem
                    deleteTodo={deleteTodo}
                    doneTodo={doneTodo}
                    {...todo}
                    key={todo.id}
                    index={i}
                  />
                ))
              ) : (
                <h2 className="text-center font-semibold">Task mavjud emas!</h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
