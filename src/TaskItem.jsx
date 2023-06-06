function TaskItem(props) {
  return (
    <li>
      <p>{props.title}</p>

      <input type="checkbox" />

      <button className="btn-close">x</button>
    </li>
  );
}

export default TaskItem;
