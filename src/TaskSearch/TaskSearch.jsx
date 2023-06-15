import { useContext } from "react";
import "./TaskSearch.css";
import { TaskContext } from "../TasksContext/TaskContext";

// eslint-disable-next-line react/prop-types
function TaskSearch() {
  const { searchValue, setSearchValue, searchedTasks } =
    useContext(TaskContext);
  return (
    <>
      <input
        className="TaskSearch"
        type="text"
        placeholder="Write task here.."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          console.log(searchedTasks.length);
        }}
      />
    </>
  );
}

export default TaskSearch;
