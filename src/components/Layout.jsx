import React, { useState } from "react";
import SideBar from "./SideBar";
import TodoView from "./TodoView";

const Layout = () => {
  // Get state from SideBar
  const [state, setState] = useState();
  return (
    <>
      <div className="flex overscroll-none">
        <SideBar state={state} setState={setState} />
        <TodoView state={state} />
      </div>
    </>
  );
};

export default Layout;
