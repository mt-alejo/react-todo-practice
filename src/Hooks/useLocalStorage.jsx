import { useState, useEffect } from "react";
function useLocalStorage(itemName, initialValue) {
  const [itemsList, setItemsList] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItemsList([...JSON.parse(localStorage.getItem(itemName))]);
    setLoading(false);
  }, [itemName]);

  const saveLocalStorage = (actualizedList) => {
    setItemsList(actualizedList);
    let tasksListString = JSON.stringify(actualizedList);
    localStorage.setItem(itemName, tasksListString);
  };

  return { itemsList, saveLocalStorage, loading };
}

export { useLocalStorage };
