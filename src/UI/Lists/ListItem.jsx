const ListItem = ({ title, done, index, deleteTask, id }) => {
  return (
    <li className="flex items-center my-2 ps-2 bg-white p-2 justify-between">
      <span className="w-7 h-7 bg-black text-orange-500 grid place-content-center rounded-full">
        {" "}
        {index + 1}
      </span>
      <strong>{title} </strong>

      <button
        onClick={() => deleteTask(id)}
        className="bg-red-600 text-white px-2 py-2 rounded-md active:bg-red-400 font-semibold"
      >
        Delete Task
      </button>
    </li>
  );
};

export default ListItem;
