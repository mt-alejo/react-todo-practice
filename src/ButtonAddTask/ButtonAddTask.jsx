import { useContext } from "react";
import "./ButtonAddTask.css";
import { TaskContext } from "../TasksContext/TaskContext";
function ButtonAddTask() {
  const { setOpenModal } = useContext(TaskContext);
  return (
    <button>
      <span
        className="ButtonAddTask"
        type="button"
        onClick={() => {
          // document.querySelector(".TaskForm").classList.add("TaskForm--active");
          setOpenModal((value) => !value);
        }}
      >
        +
      </span>
    </button>
  );
}

export default ButtonAddTask;
