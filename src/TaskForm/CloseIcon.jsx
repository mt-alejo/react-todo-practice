import TaskIcons from "../TaskIcons/TaskIcons";

function DeleteIcon({ onClose }) {
  return <TaskIcons onClick={onClose} type="close" color="gray" />;
}

export default DeleteIcon;
