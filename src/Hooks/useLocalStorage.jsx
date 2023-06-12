import { useState } from "react";
function useLocalStorage(itemName, initialValue) {
  const [itemsList, setItemsList] = useState(
    () => JSON.parse(localStorage.getItem(itemName)) || initialValue
  );

  const saveLocalStorage = (actualizedList) => {
    setItemsList(actualizedList);
    let tasksListString = JSON.stringify(actualizedList);
    localStorage.setItem(itemName, tasksListString);
  };

  return [itemsList, saveLocalStorage];
}

export { useLocalStorage };
