function TasksContainer(props) {
  // eslint-disable-next-line react/prop-types
  return <ul className="tasks-container">{props.children}</ul>;
}

export default TasksContainer;
