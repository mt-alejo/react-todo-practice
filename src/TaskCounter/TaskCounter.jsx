import "./TaskCounter.css";
// eslint-disable-next-line react/prop-types
function TaskCounter({ completed, total, isAllCompleted, isAllEmpty }) {
  let mesagge = (
    <h1 className="TaskCounter">
      You have completed <span className="TaskCounter-span">{completed} </span>
      of <span className="TaskCounter-span">{total} </span> tasks
    </h1>
  );
  if (isAllCompleted) {
    mesagge = (
      <h1 className="TaskCounter">
        <span className="TaskCounter-span">All tasks completed!</span>
      </h1>
    );
  }

  if (isAllEmpty) {
    mesagge = (
      <h1 className="TaskCounter">
        <span className="TaskCounter">NOTHING HERE!</span>
      </h1>
    );
  }

  return <>{mesagge}</>;
}

export default TaskCounter;
