import "./TasksContainer.css";
function TasksContainer(props) {
  let message = "";
  if (props.isAllEmpty) {
    message = (
      <h1 className="TaskContainer-Empty-Title">Press + to add a new task..</h1>
    );
  } else {
    message = props.children;
  }

  // eslint-disable-next-line react/prop-types
  return <ul className="TasksContainer">{message}</ul>;
}

export default TasksContainer;
