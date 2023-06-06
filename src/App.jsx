import "./App.css";
import TaskCounter from "./TaskCounter";
import TaskSearch from "./TaskSearch";
import TasksContainer from "./TaskContainer";
import ButtonAddTask from "./ButtonAddTask";
import TaskItem from "./TaskItem";

function App() {
  return (
    <>
      <TaskCounter />
      <TaskSearch />
      <TasksContainer>
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </TasksContainer>
      <ButtonAddTask />
    </>
  );
}

export default App;
