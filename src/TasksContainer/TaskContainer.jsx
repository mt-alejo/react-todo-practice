import "./TasksContainer.css";
function TasksContainer(props) {
  // eslint-disable-next-line react/prop-types
  return <ul className="TasksContainer">{props.children}</ul>;
}

export default TasksContainer;
