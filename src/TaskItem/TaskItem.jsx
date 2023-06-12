/* eslint-disable react/prop-types */
import "./TaskItem.css";
import "../ButtonClose/ButtonClose.css";
import { FaCheck } from "react-icons/fa";

function TaskItem(props) {
  return (
    <li className="TaskItem">
      <span className="TaskItem-Icon" onClick={props.onComplete}>
        <span
          className={`Icon Icon-Check ${
            props.done ? `Icon-Check--active` : ""
          } `}
        >
          <FaCheck />
        </span>
      </span>
      <p
        className={`TaskItem-Task ${
          props.done ? " TaskItem-Task--complete" : ""
        }`}
      >
        {props.title}{" "}
      </p>
      <button type="button" className="ButtonClose" onClick={props.onRemove}>
        x
      </button>{" "}
    </li>
  );
}

export default TaskItem;
