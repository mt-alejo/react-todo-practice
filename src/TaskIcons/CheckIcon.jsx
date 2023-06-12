import TaskIcons from "./TaskIcons";

export default function CheckIcon({ done }) {
  return <TaskIcons type="check" color={done ? "greenyellow" : "gray"} />;
}
