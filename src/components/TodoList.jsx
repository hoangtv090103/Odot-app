import { useEffect } from "react";

const TodoList = ({
  state,
  taskList,
  taskStateChange,
  taskRemove,
  setTaskList,
}) => {
  console.log(state);

  return (
    <div className="flex flex-col items-center mt-3 w-[90%]">
      {taskList.map((todo) =>
        (todo != null && state === todo.state) ||
        (state === "All Tasks" && todo.state !== "DELETED") ? (
          <div
            className="flex flex-row border-2 border-slate-200 rounded-full text-xl w-full p-2 mb-2"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="m-2"
              onClick={() => taskStateChange(todo.id)}
              value={todo.isDone}
            ></input>
            {todo.state === "DONE" ? (
              <div className="w-5/6 line-through">{todo.text}</div>
            ) : (
              <div className="w-5/6">{todo.text}</div>
            )}
            <button
              className="w-1/6 h-full bg-red-500 rounded-full text-white font-bold disabled:bg-gray-400"
              onClick={() => taskRemove(todo.id)}
            >
              Delete
            </button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default TodoList;
