const todoKey = "reactTodo";

export const getLocalStorageData = () => {
  const rawTodo = localStorage.getItem(todoKey);
  if (!rawTodo) {
    return [];
  }
  try {
    // Converting the localStorage data back to original form
    return JSON.parse(rawTodo);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return [];
  }
};

// Add data to local storage
export const setLocalStorageData = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task)); // Converting data to string
};
