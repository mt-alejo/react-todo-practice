import "./App.css";
import { useState } from "react";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function App() {
  const [tasksList, setTasksList] = useLocalStorage("TASKER_V1", []);

  const completedTasks = tasksList.filter((task) => task.done === true).length;

  const [searchValue, setSearchValue] = useState("");

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
    setTasksList(copyCurrentTaskList);
  };

  const removeTask = (text) => {
    const copyCurrentTaskList = [...tasksList];

    const actualizedTaskList = copyCurrentTaskList.filter(
      (task) => task.title !== text
    );
    setTasksList(actualizedTaskList);
  };

  const isAllCompleted = tasksList.every((task) => !!task.done);
  const isAllEmpty = tasksList.length === 0 ? true : false;

  return (
    <>
      <TaskForm tasksList={tasksList} setTasksList={setTasksList} />
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
