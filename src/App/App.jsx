import "./App.css";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";

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
