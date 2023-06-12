/* eslint-disable react/prop-types */
import "./TaskItem.css";
import CheckIcon from "../TaskIcons/CheckIcon";
import DeleteIcon from "../TaskIcons/DeleteIcon";

function TaskItem(props) {
  return (
    <li className="TaskItem">
      <CheckIcon onComplete={props.onComplete} done={props.done} />

      <p
        className={`TaskItem-Task ${
          props.done ? " TaskItem-Task--complete" : ""
        }`}
      >
        {props.title}{" "}
      </p>
      <DeleteIcon onRemove={props.onRemove} />
    </li>
  );
}

export default TaskItem;
