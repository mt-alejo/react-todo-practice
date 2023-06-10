/* eslint-disable react/prop-types */
import "./TaskItem.css";
import "../ButtonClose/ButtonClose.css";
import { FaCheck } from "react-icons/fa";

function TaskItem(props) {
  return (
    <li className="TaskItem">
      <span className="TaskItem-Icon" onClick={props.onComplete}>
        {props.done === true ? "✅" : "⬜"}{" "}
      </span>
      <p
        className={`TaskItem-Task ${
          props.done ? " TaskItem-Task--complete" : ""
        }`}
      >
        {props.title}{" "}
        <span className="Icon-Check">
          <FaCheck />
        </span>
      </p>
      <button type="button" className="ButtonClose" onClick={props.onRemove}>
        x
      </button>{" "}
    </li>
  );
}

export default TaskItem;
