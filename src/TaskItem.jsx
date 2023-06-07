function TaskItem(props) {
  return (
    <li className="task-item">
      <input type="checkbox" />

      <p className="task-item-title">{props.title}</p>

      <button className="btn-close">x</button>
    </li>
  );
}

export default TaskItem;
