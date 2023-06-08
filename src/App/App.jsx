import "./App.css";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

const defaultTasks = [
  { title: "Pasear perro", done: true },
  { title: "Pasear gato", done: false },
  {
    title: "Pasear pescado",
    done: true,
  },
  {
    title: "Pasear borrego",
    done: true,
  },
];

function App() {
  return (
    <>
      <TaskForm />
      <TaskCounter completed={"$"} total={defaultTasks.length} />
      <TaskSearch />
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
