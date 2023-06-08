/* eslint-disable react/prop-types */
import "./TaskItem.css";
import ButtonClose from "../ButtonClose/ButtonClose";
function TaskItem(props) {
  return (
    <li className="TaskItem">
      <span className="TaskItem-Icon">{props.done === true ? "✅" : "⬜"}</span>

      <p
        className={`TaskItem-Task ${
          props.done ? " TaskItem-Task--complete" : ""
        }`}
      >
        {props.title}
      </p>

      <ButtonClose />
    </li>
  );
}

export default TaskItem;
