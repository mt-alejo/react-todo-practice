import "./App.css";
import { useState } from "react";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

// const defaultTasks = [
//   {
//     title: "Learn English",
//     done: false,
//   },
//   {
//     title: "Work out on GYM",
//     done: false,
//   },
// ];

// localStorage.setItem("TASKER_V1", JSON.stringify(defaultTasks))

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [tasksList, setTasksList] = useState(
    () => JSON.parse(localStorage.getItem("TASKER_V1")) || []
  );

  const saveLocalStorage = (actualizedList) => {
    setTasksList(actualizedList);
    let tasksListString = JSON.stringify(actualizedList);
    localStorage.setItem("TASKER_V1", tasksListString);
  };

  const completedTasks = tasksList.filter((task) => task.done === true).length;

  const searchedTasks = tasksList.filter((task) => {
    let taskTitle = task.title.toLowerCase();
    let searchedValue = searchValue.toLowerCase();

    return taskTitle.includes(searchedValue);
  });

  const toggleDone = (text) => {
    const copyCurrentTaskList = [...tasksList];
    const indexTask = copyCurrentTaskList.findIndex(
      (task) => task.title === text
    );
    copyCurrentTaskList[indexTask].done
      ? (copyCurrentTaskList[indexTask].done = false)
      : (copyCurrentTaskList[indexTask].done = true);
    saveLocalStorage(copyCurrentTaskList);
  };

  const removeTask = (text) => {
    const copyCurrentTaskList = [...tasksList];

    const actualizedTaskList = copyCurrentTaskList.filter(
      (task) => task.title !== text
    );
    saveLocalStorage(actualizedTaskList);
  };

  const isAllCompleted = tasksList.every((task) => !!task.done);
  const isAllEmpty = tasksList.length === 0 ? true : false;

  return (
    <>
      <TaskForm tasksList={tasksList} saveLocalStorage={saveLocalStorage} />
      <TaskCounter
        isAllEmpty={isAllEmpty}
        isAllCompleted={isAllCompleted}
        completed={completedTasks}
        total={tasksList.length}
      />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TasksContainer isAllEmpty={isAllEmpty}>
        {searchedTasks.map((task) => (
          <TaskItem
            key={task.title}
            title={task.title}
            done={task.done}
            onComplete={() => {
              toggleDone(task.title);
            }}
            onRemove={() => {
              removeTask(task.title);
            }}
          />
        ))}
      </TasksContainer>
      <ButtonAddTask />
    </>
  );
}

export default App;
