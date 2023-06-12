import TaskIcons from "./TaskIcons";

export default function CheckIcon({ done, onComplete }) {
  return (
    <TaskIcons
      onClick={onComplete}
      type="check"
      color={done ? "greenyellow" : "gray"}
    />
  );
}
