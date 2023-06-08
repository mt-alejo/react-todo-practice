/* eslint-disable react/prop-types */
import "./TaskItem.css";
function TaskItem(props) {
  return (
    <li className="TaskItem">
      <span className="TaskItem-Icon">{props.done === true ? "✅" : "⬜"}</span>

      <p className="TaskItem-Task TaskItem-Task--complete">{props.title}</p>

      <button className="Btn-Close">x</button>
    </li>
  );
}

export default TaskItem;
