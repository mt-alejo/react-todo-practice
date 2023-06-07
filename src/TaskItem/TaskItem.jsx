/* eslint-disable react/prop-types */
import "./TaskItem.css";
function TaskItem(props) {
  return (
    <li className="TaskItem">
      <input type="checkbox" />

      <p className="TaskItem-Task">{props.title}</p>

      <button className="Btn-Close">x</button>
    </li>
  );
}

export default TaskItem;
