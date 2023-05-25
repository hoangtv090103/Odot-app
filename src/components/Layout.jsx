import React, { useState } from "react";
import SideBar from "./SideBar";
import TodoView from "./TodoView";

const taskState = {
  all_tasks: "All Tasks",
  todo: "TODO",
  doing: "DOING",
  done: "DONE",
};

const Layout = () => {
  // Get state from SideBar
  const [state, setState] = useState("all_tasks");
  const [taskList, setTaskList] = React.useState([]);

  return (
    <>
      <div className="flex overscroll-none">
        <SideBar state={state} setState={setState} />
        <TodoView
          state={taskState[state]}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
    </>
  );
};

export default Layout;
