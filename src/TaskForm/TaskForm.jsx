import { useContext, useState } from "react";
import "./TaskForm.css";
import { TaskContext } from "../TasksContext/TaskContext";
function TaskForm() {
  const { setOpenModal, addTask } = useContext(TaskContext);
  const [userInput, setUserInput] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal((value) => !value);
    addTask(userInput);
  };

  const onCancel = () => {
    setOpenModal((value) => !value);
  };

  const onChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form className="TaskForm" onSubmit={onSubmit}>
      <label htmlFor="">Insert task:</label>
      <textarea
        name=""
        id=""
        placeholder="Write a task"
        onChange={onChange}
        value={userInput}
      ></textarea>
      <div className="TaskForm-button-container">
        <button
          className="TaskForm-button TaskForm-button--cancel"
          type="button"
          onClick={onCancel}
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
