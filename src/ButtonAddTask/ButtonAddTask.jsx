import "./ButtonAddTask.css";
function ButtonAddTask() {
  return (
    <button
      type="button"
      onClick={() => {
        document.querySelector(".TaskForm").classList.add("TaskForm--active");
      }}
      className="Btn ButtonAddTask"
    >
      +
    </button>
  );
}

export default ButtonAddTask;
