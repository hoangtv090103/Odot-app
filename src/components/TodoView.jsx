import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { useCallback } from "react";

const TodoView = ({ state, taskList, setTaskList }) => {
  const [textInput, setTextInput] = useState("");
  // const [taskList, setTaskList] = useState([]);

  // useEffect() là hàm chạy sau khi render, có công dụng là đặc trưng là một side effect, ví dụ như gọi API, thay đổi DOM, thay đổi state, ...
  // useEffect() có 2 tham số, tham số thứ nhất là một hàm, tham số thứ 2 là một mảng chứa các biến, khi các biến trong mảng thay đổi thì useEffect() sẽ được gọi lại

  const taskStateChange = useCallback((id) => {
    setTaskList((taskList) =>
      taskList.map((todo) =>
        todo.id === id && !todo.isDone
          ? { ...todo, state: "DONE", isDone: true }
          : { ...todo, state: "TODO", isDone: false }
      )
    );
  }, []);

  const taskRemove = (id) => {
    setTaskList((taskList) =>
      taskList.map((todo) =>
        todo.id === id && !todo.isDone
          ? { ...todo, state: "DELETED", isDone: null }
          : todo
      )
    );
  };

  const addTask = useCallback(
    (e) => {
      // Add new task to taskList
      setTaskList([
        {
          id: taskList.length,
          text: textInput,
          state: "TODO",
          isDone: false,
        },
        ...taskList,
      ]);

      console.log(taskList);
      setTextInput("");
    },
    [taskList, textInput]
  ); // Khi có sự thay đổi của taskList hoặc textInput thì hàm addTask() mới được gọi lại

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="border-b-2 border-slate-200 h-10 text-center p-2 w-full font-pmarker">
        {state}
      </div>
      {state === "All Tasks" || state === "TODO" ? (
        <div className="flex flex-row border-2 mt-3 border-slate-200 rounded-full text-xl w-[80%] p-2">
          <input
            className="w-full h-full outline-none"
            placeholder="Add a task"
            onChange={onTextInputChange}
            value={textInput}
          ></input>
          <button
            className="w-1/6 h-full bg-blue-500 rounded-full text-white font-bold disabled:bg-gray-400"
            disabled={textInput === ""}
            onClick={(e) => addTask(e)}
          >
            Add
          </button>
        </div>
      ) : null}
      <TodoList
        state={state}
        taskList={taskList}
        taskStateChange={taskStateChange}
        taskRemove={taskRemove}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TodoView;
