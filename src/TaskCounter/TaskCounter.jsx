import "./TaskCounter.css";
// eslint-disable-next-line react/prop-types
function TaskCounter({ completed, total }) {
  return (
    <>
      <h1 className="TaskCounter">
        You have completed{" "}
        <span className="TaskCounter-span">{completed} </span>
        of <span className="TaskCounter-span">{total} </span> tasks
      </h1>
    </>
  );
}

export default TaskCounter;
