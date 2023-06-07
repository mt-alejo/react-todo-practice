import "./TaskCounter.css";
// eslint-disable-next-line react/prop-types
function TaskCounter({ completed, total }) {
  return (
    <>
      <h1 className="TaskCounter">
        You have completed {completed} of {total} tasks
      </h1>
    </>
  );
}

export default TaskCounter;
