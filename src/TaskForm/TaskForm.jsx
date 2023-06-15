import { useContext } from "react";
import "./TaskForm.css";
import { TaskContext } from "../TasksContext/TaskContext";
function TaskForm() {
  const { setOpenModal } = useContext(TaskContext);
  return (
    // <form
    //   action=""
    //   className="TaskForm"
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     const userInput = {
    //       title: document.querySelector(".TaskForm-input").value,
    //       done: false,
    //     };
    //     // setTasksList([...tasksList, userInput]);
    //     const form = document.querySelector(".TaskForm");
    //     form.classList.remove("TaskForm--active");
    //     form.reset();
    //   }}
    // >
    //   <label htmlFor="task-title">Task:</label>
    //   <input type="text" name="task-title" className="TaskForm-input" />
    //   <input type="submit" value="Add task" className="Btn TaskForm-submit" />

    //   <CloseIcon
    //     onClose={() => {
    //       document
    //         .querySelector(".TaskForm")
    //         .classList.remove("TaskForm--active");
    //     }}
    //   />
    // </form>
    <form
      className="TaskForm"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Woorks");
      }}
    >
      <label htmlFor="">Insert task:</label>
      <textarea name="" id="" placeholder="Write a task"></textarea>
      <div className="TaskForm-button-container">
        <button
          className="TaskForm-button TaskForm-button--cancel"
          type="button"
          onClick={() => setOpenModal((value) => !value)}
        >
          Cancel
        </button>
        <button className="TaskForm-button TaskForm-button--add" type="submit">
          Add task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
