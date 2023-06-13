/* eslint-disable react/prop-types */
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import LoadingState from "../LoadingState/LoadingState";

function AppUI({
  loading,
  error,
  tasksList,
  setTasksList,
  isAllEmpty,
  isAllCompleted,
  completedTasks,
  searchValue,
  setSearchValue,
  searchedTasks,
  toggleDone,
  removeTask,
}) {
  return (
    <>
      <TaskForm tasksList={tasksList} setTasksList={setTasksList} />
      <TaskCounter
        isAllEmpty={isAllEmpty}
        isAllCompleted={isAllCompleted}
        completed={completedTasks}
        total={tasksList.length}
      />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TasksContainer isAllEmpty={isAllEmpty}>
        {error ? <p>Hubo un error</p> : null}
        {console.log(error)}
        {loading ? <LoadingState /> : null}
        {!loading && !searchedTasks.length ? (
          <h1 className="TaskContainer-Empty-Title">
            Press + to add a new task..
          </h1>
        ) : null}
        {searchedTasks.map((task) => (
          <TaskItem
            key={task.title}
            title={task.title}
            done={task.done}
            onComplete={() => {
              toggleDone(task.title);
            }}
            onRemove={() => {
              removeTask(task.title);
            }}
          />
        ))}
      </TasksContainer>
      <ButtonAddTask />
    </>
  );
}

export default AppUI;
