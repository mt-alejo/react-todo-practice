import "./TaskForm.css";

function TaskForm() {
  return (
    <form action="" className="TaskForm">
      <label htmlFor="task-title">Task:</label>
      <input type="text" name="task-title" className="TaskForm-input" />
      <input type="submit" value="Add task" className="Btn TaskForm-submit" />
    </form>
  );
}

export default TaskForm;
