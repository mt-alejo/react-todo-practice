import "./App.css";
import TaskCounter from "./TaskCounter";
import TaskSearch from "./TaskSearch";
import TasksContainer from "./TaskContainer";
import ButtonAddTask from "./ButtonAddTask";
import TaskItem from "./TaskItem";

const defaultTasks = [
  { title: "Pasear perro", done: true },
  { title: "Pasear gato", done: false },
  { title: "Pasear pescado", done: true },
];

function App() {
  return (
    <>
      <TaskCounter completed={4} total={10} />
      <TaskSearch />
      <TasksContainer>
        {defaultTasks.map((task) => (
          <TaskItem key={task.title} title={task.title} done={task.done} />
        ))}
        <ButtonAddTask />
      </TasksContainer>
    </>
  );
}

export default App;
