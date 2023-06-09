import "./App.css";
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

const defaultTasks = [
  { title: "Go for a walk", done: true },
  {
    title: "Do maths",
    done: false,
  },
  {
    title: "Learning and coding with React",
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
  {
    title: "More coding",
    done: false,
  },
  {
    title: "Watch anime",
    done: true,
  },
];

const completedTasks = defaultTasks.filter((task) => task.done === true).length;

function App() {
  return (
    <>
      <TaskForm />
      <TaskCounter completed={completedTasks} total={defaultTasks.length} />
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
