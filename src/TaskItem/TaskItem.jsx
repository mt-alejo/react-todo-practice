/* eslint-disable react/prop-types */
import "./TaskItem.css";
import "../ButtonClose/ButtonClose.css";
import CheckIcon from "../TaskIcons/CheckIcon";
import DeleteIcon from "../TaskIcons/DeleteIcon";

function TaskItem(props) {
  return (
    <li className="TaskItem">
      <span className="TaskItem-Icon" onClick={props.onComplete}>
        <CheckIcon done={props.done} />
      </span>
      <p
        className={`TaskItem-Task ${
          props.done ? " TaskItem-Task--complete" : ""
        }`}
      >
        {props.title}{" "}
      </p>
      <p onClick={props.onRemove}>
        <DeleteIcon />
      </p>
    </li>
  );
}

export default TaskItem;
