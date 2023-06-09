import "./App.css";
import { useState } from "react";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

const defaultTasks = [
  {
    title: "Learn English",
    done: false,
  },
  {
    title: "Work out on GYM",
    done: false,
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log("Search: " + searchValue);

  const [tasksList, setTasksList] = useState(defaultTasks);
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
    setTasksList(copyCurrentTaskList);
    console.log(copyCurrentTaskList);
  };

  const removeTask = (text) => {
    const copyCurrentTaskList = [...tasksList];

    const actualizedTaskList = copyCurrentTaskList.filter(
      (task) => task.title !== text
    );
    setTasksList(actualizedTaskList);

    console.log(actualizedTaskList);
  };

  return (
    <>
      <TaskForm setTasksList={setTasksList} tasksList={tasksList} />
      <TaskCounter completed={completedTasks} total={tasksList.length} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TasksContainer>
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
        <ButtonAddTask />
      </TasksContainer>
    </>
  );
}

export default App;
