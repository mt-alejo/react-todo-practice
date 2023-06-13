import "./App.css";
import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import AppUI from "./AppUI";

function App() {
  const {
    itemsList: tasksList,
    saveLocalStorage: setTasksList,
    loading,
  } = useLocalStorage("TASKER_V1", []);

  const completedTasks = tasksList.filter((task) => task.done === true).length;

  const [searchValue, setSearchValue] = useState("");

  const searchedTasks = tasksList.filter((task) => {
    let taskTitle = task.title.toLowerCase();
    let searchedValue = searchValue.toLowerCase();

    return taskTitle.includes(searchedValue);
  });

  const isAllCompleted = tasksList.every((task) => !!task.done);
  const isAllEmpty = tasksList.length === 0 ? true : false;

  const toggleDone = (text) => {
    const copyCurrentTaskList = [...tasksList];
    const indexTask = copyCurrentTaskList.findIndex(
      (task) => task.title === text
    );
    copyCurrentTaskList[indexTask].done
      ? (copyCurrentTaskList[indexTask].done = false)
      : (copyCurrentTaskList[indexTask].done = true);
    setTasksList(copyCurrentTaskList);
  };

  const removeTask = (text) => {
    const copyCurrentTaskList = [...tasksList];

    const actualizedTaskList = copyCurrentTaskList.filter(
      (task) => task.title !== text
    );
    setTasksList(actualizedTaskList);
  };

  return (
    <AppUI
      loading={loading}
      tasksList={tasksList}
      setTasksList={setTasksList}
      isAllEmpty={isAllEmpty}
      isAllCompleted={isAllCompleted}
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      toggleDone={toggleDone}
      removeTask={removeTask}
    />
  );
}

export default App;
