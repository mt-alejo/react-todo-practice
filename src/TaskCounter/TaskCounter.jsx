import { useContext } from "react";
import "./TaskCounter.css";
import { TaskContext } from "../TasksContext/TaskContext";
// eslint-disable-next-line react/prop-types
function TaskCounter() {
  const { isAllEmpty, isAllCompleted, completedTasks, totalTasks } =
    useContext(TaskContext);
  let mesagge = (
    <h1 className="TaskCounter">
      You have completed{" "}
      <span className="TaskCounter-span">{completedTasks} </span>
      of <span className="TaskCounter-span">{totalTasks} </span> tasks
    </h1>
  );
  if (isAllCompleted) {
    mesagge = (
      <h1 className="TaskCounter">
        <span className="TaskCounter-span">All tasks completed!</span>
      </h1>
    );
  }

  if (isAllEmpty) {
    mesagge = (
      <h1 className="TaskCounter">
        <span className="TaskCounter">NOTHING HERE!</span>
      </h1>
    );
  }

  return <>{mesagge}</>;
}

export default TaskCounter;
