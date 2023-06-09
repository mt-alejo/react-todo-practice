import "./TaskForm.css";

function TaskForm({ setTasksList, tasksList }) {
  return (
    <form
      action=""
      className="TaskForm"
      onSubmit={(e) => {
        e.preventDefault();
        const userInput = {
          title: document.querySelector(".TaskForm-input").value,
          done: false,
        };
        setTasksList([...tasksList, userInput]);
        console.log(tasksList);
        console.log("Received " + userInput);
        const form = document.querySelector(".TaskForm");
        form.classList.remove("TaskForm--active");
        form.reset();
      }}
    >
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
