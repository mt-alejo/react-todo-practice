import "./TaskSearch.css";

// eslint-disable-next-line react/prop-types
function TaskSearch({ searchValue, setSearchValue }) {
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
