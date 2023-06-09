import "./TaskSearch.css";
import { useState } from "react";

function TaskSearch() {
  const [searchValue, setSearchValue] = useState("");
  console.log("Search: " + searchValue);

  return (
    <>
      <input
        className="TaskSearch"
        type="text"
        placeholder="Write task here.."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </>
  );
}

export default TaskSearch;
