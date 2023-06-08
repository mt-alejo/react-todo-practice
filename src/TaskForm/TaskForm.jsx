import "./TaskForm.css";

function TaskForm() {
  return (
    <form action="" className="TaskForm">
      <label htmlFor="task-title">Task:</label>
      <input type="text" name="task-title" className="TaskForm-input" />
      <input type="submit" value="Add task" className="Btn TaskForm-submit" />
      <button
        type="button"
        className="ButtonClose"
        onClick={() => {
          document
            .querySelector(".TaskForm")
            .classList.remove("TaskForm--active");
        }}
      >
        x
      </button>{" "}
    </form>
  );
}

export default TaskForm;
