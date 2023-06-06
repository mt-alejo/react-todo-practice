// eslint-disable-next-line react/prop-types
function TaskCounter({ completed, total }) {
  return (
    <>
      <h1 className="title">
        You have completed {completed} of {total} tasks
      </h1>
    </>
  );
}

export default TaskCounter;
