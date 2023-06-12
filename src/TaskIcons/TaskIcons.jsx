import "./TaskIcons.css";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const iconTypes = {
  check: (color) => <FaCheck className="Icon-svg" fill={color} />,
  delete: (color) => <FaTimes className="Icon-svg" fill={color} />,
};
function TaskIcons({ type, color }) {
  return <span className={`Icon Icon-${type}`}>{iconTypes[type](color)}</span>;
}

export default TaskIcons;
