import { useState, useEffect } from "react";
function useLocalStorage(itemName, initialValue) {
  const [itemsList, setItemsList] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setItemsList([...JSON.parse(localStorage.getItem(itemName))]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, [itemName]);

  const saveLocalStorage = (actualizedList) => {
    setItemsList(actualizedList);
    let tasksListString = JSON.stringify(actualizedList);
    localStorage.setItem(itemName, tasksListString);
  };

  return { itemsList, saveLocalStorage, loading, error };
}

export { useLocalStorage };
