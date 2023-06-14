import { TaskProvider } from "../TasksContext/TaskContext";
import "./App.css";
import AppUI from "./AppUI";

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
