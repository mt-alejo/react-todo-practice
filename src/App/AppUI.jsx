/* eslint-disable react/prop-types */
import TaskCounter from "../TaskCounter/TaskCounter";
import TaskSearch from "../TaskSearch/TaskSearch";
import TasksContainer from "../TasksContainer/TaskContainer";
import ButtonAddTask from "../ButtonAddTask/ButtonAddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";
import LoadingState from "../LoadingState/LoadingState";
import TaskModal from "../TaskModal/TaskModal";
import { useContext } from "react";
import { TaskContext } from "../TasksContext/TaskContext";

function AppUI() {
  const { openModal } = useContext(TaskContext);
  return (
    <>
      {/* <TaskForm tasksList={tasksList} setTasksList={setTasksList} /> */}
      <TaskCounter />
      <TaskSearch />
      <TaskContext.Consumer>
        {({
          loading,
          error,
          isAllEmpty,
          searchedTasks,
          toggleDone,
          removeTask,
        }) => (
          <TasksContainer isAllEmpty={isAllEmpty}>
            {error ? <p>Hubo un error</p> : null}
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
        )}
      </TaskContext.Consumer>
      {openModal && (
        <TaskModal>
          <TaskForm />
        </TaskModal>
      )}
      <ButtonAddTask />
    </>
  );
}

export default AppUI;
