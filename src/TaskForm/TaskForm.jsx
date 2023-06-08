import "./TaskForm.css";
import ButtonClose from "../ButtonClose/ButtonClose";

function TaskForm() {
  return (
    <form action="" className="TaskForm">
      <label htmlFor="task-title">Task:</label>
      <input type="text" name="task-title" className="TaskForm-input" />
      <input type="submit" value="Add task" className="Btn TaskForm-submit" />
      <ButtonClose />
    </form>
  );
}

export default TaskForm;
