import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const ODOT_APP_STORAGE_KEY = "ODOT_APP";
  useEffect(() => {
    localStorage.setItem(ODOT_APP_STORAGE_KEY, JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    const storedTaskList = JSON.parse(
      localStorage.getItem(ODOT_APP_STORAGE_KEY)
    );
    if (storedTaskList) setTaskList(storedTaskList);
  }, [setTaskList]);
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
