const ListItem = ({ title, done, index, deleteTodo, id, doneTodo }) => {
  return (
    <li className="flex items-center my-2 ps-2 bg-white p-2 justify-between">
      <span
        className={`w-7 h-7 ${
          done ? " bg-red-600 text-white" : "bg-blue-600 text-white"
        } bg-black text-orange-500 grid place-content-center rounded-full`}
      >
        {" "}
        {index + 1}
      </span>
      <strong className={`${done ? "line-through" : ""}`}>{title} </strong>
      <div>
        {done ? (
          <button
            onClick={() => deleteTodo(id)}
            className="bg-red-600 text-white px-2 mr-3 py-2 rounded-md active:bg-red-400 font-semibold"
          >
            Delete Task
          </button>
        ) : (
          <button
            onClick={() => doneTodo(id)}
            className="bg-blue-600 text-white px-2 py-2 rounded-md active:bg-blue-400 font-semibold"
          >
            Done Task
          </button>
        )}
      </div>
    </li>
  );
};

export default ListItem;
