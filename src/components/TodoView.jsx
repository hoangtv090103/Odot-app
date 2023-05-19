const TodoView = ({ state }) => {
  const onAddTask = () => {
    const input = document.querySelector("input");
    const tasks = document.getElementById("tasks");

    const task = document.createElement("div");
    task.classList.add(
      "flex",
      "flex-row",
      "border-2",
      "mt-3",
      "rounded-xl",
      "border-slate-200",
      "text-xl",
      "w-[80%]",
      "p-2",
      "items-center",
      "justify-between"
    );

    const taskText = document.createElement("div");
    const taskCheckbox = document.createElement("input");
    const taskDelete = document.createElement("button");

    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add(
      "w-1/6",
      "bg-blue-500",
      "rounded-full",
      "text-white",
      "font-bold",
      "align-middle",
      "transform"
    );

    taskText.classList.add(
      "w-full",
      "h-full",
      "bg-white",
      "rounded-full",
      "text-black",
      "font-bold",
      "align-middle",
      "outline-none",
    );
    taskText.innerText = input.value;

    taskDelete.classList.add(
      "w-1/6",
      "h-full",
      "bg-red-400",
      "rounded-full",
      "text-white",
      "font-bold",
      "align-middle"
    );
    taskDelete.innerText = "Delete";

    taskDelete.addEventListener("click", () => {
      task.remove();
    });

    input.value = "";

    task.appendChild(taskCheckbox);
    task.appendChild(taskText);
    task.appendChild(taskDelete);
    tasks.appendChild(task);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="border-b-2 border-slate-200 h-10 text-center p-2 w-full">
        {state}
      </div>

      <div className="flex flex-row border-2 mt-3 border-slate-200 rounded-full text-xl w-[80%] p-2">
        <input
          className="w-full h-full outline-none"
          placeholder="Do something..."
        ></input>
        <button
          className="w-1/6 h-full bg-blue-500 rounded-full text-white font-bold disabled:bg-gray-400"
          onClick={() => {
            onAddTask();
          }}
        >
          Add
        </button>
      </div>

      <div
        id="tasks"
        className="flex flex-col-reverse w-full items-center overflow-y-auto max-h-[500px] md:max-h-[700px]"
      ></div>
    </div>
  );
};

export default TodoView;
