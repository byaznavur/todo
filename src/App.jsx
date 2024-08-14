import { useState, useRef } from "react";
import ListItem from "./UI/Lists/ListItem";

const App = () => {
  const inputRef = useRef("");

  const [datas, setDatas] = useState([
    { id: 1, title: "Hello World", done: false },
  ]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: inputRef.current.value,
      done: false,
    };

    if (newTask.title.trim().length) {
      setDatas([...datas, newTask]);
      inputRef.current.value = "";
    } else {
      alert("Enter your a task title");
    }
  };
  const deleteTask = (id) => {
    const res = datas.filter((data) => data.id !== id);
    setDatas(res);
  };
  return (
    <div className="container mx-auto">
      <div className="wrapper mx-auto w-[800px] mt-8  bg-orange-400 p-2">
        <div className="todo">
          <h2 className="text-center py-2 font-semibold my-3">MY TODO APP</h2>

          <div className="todo-header flex gap-2 p-2  ">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter task"
              className="grow focus:outline-none py-2 ps-4 rounded-lg focus:shadow-lg"
            />
            <button
              onClick={() => addTask()}
              className="bg-black text-white px-2 rounded-md active:bg-orange-400 font-semibold"
            >
              Add new Task
            </button>
          </div>

          <div className="todo-body py-2 my-3">
            <ul className="">
              {datas.length ? (
                datas.map((data, i) => (
                  <ListItem
                    deleteTask={deleteTask}
                    {...data}
                    key={i}
                    index={i}
                  />
                ))
              ) : (
                <h2 className="text-center font-semibold">
                  Task mavjud emas !
                </h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
