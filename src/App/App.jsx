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
    title: "Do maths",
    done: false,
  },
  {
    title: "Code",
    done: true,
  },

  {
    title: "Learn English",
    done: true,
  },
  {
    title: "Work out on GYM",
    done: false,
  },
  {
    title: "Post in Twitter",
    done: true,
  },
];

const completedTasks = defaultTasks.filter((task) => task.done === true).length;

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log("Search: " + searchValue);

  return (
    <>
      <TaskForm />
      <TaskCounter completed={completedTasks} total={defaultTasks.length} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TasksContainer>
        {defaultTasks.map((task) => (
          <TaskItem key={task.title} title={task.title} done={task.done} />
        ))}
        <ButtonAddTask onClick={() => console.log("works")} />
      </TasksContainer>
    </>
  );
}

export default App;
