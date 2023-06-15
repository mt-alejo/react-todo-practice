import { createContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const {
    itemsList: tasksList,
    saveLocalStorage: setTasksList,
    loading,
    error,
  } = useLocalStorage("TASKER_V1", []);

  const completedTasks = tasksList.filter((task) => task.done === true).length;
  const totalTasks = tasksList.length;
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

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
    <TaskContext.Provider
      value={{
        loading,
        error,
        tasksList,
        setTasksList,
        isAllEmpty,
        isAllCompleted,
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        toggleDone,
        removeTask,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
