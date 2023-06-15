import { useContext } from "react";
import "./ButtonAddTask.css";
import { TaskContext } from "../TasksContext/TaskContext";
import { FaPlus } from "react-icons/fa";

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
        <FaPlus />
      </span>
    </button>
  );
}

export default ButtonAddTask;
