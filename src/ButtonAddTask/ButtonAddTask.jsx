import "./ButtonAddTask.css";
function ButtonAddTask() {
  return (
    <button>
      <span
        className="ButtonAddTask"
        type="button"
        onClick={() => {
          document.querySelector(".TaskForm").classList.add("TaskForm--active");
        }}
      >
        +
      </span>
    </button>
  );
}

export default ButtonAddTask;
