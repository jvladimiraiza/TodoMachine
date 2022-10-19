import React from "react";
import { AppUi } from "./AppUi";

// const defaultTodos = [
//   {  id: 1, text: 'Cortar cebolla', completed: false },
//   { id: 2, text: 'Cortar Lechuga', completed: true },
//   { id: 3, text: 'Cortar Tomate', completed: false }
// ];
  // const defaultTodos = [
  //   {  id: 1, text: 'Cortar cebolla', completed: false },
  //   { id: 2, text: 'Cortar Lechuga', completed: true },
  //   { id: 3, text: 'Cortar Tomate', completed: false }
  // ];

  function useLocalStorage(itemName, initialValue) {
    
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
    
    const saveItem = (newItem) => {
      const stringifItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifItem);
      setItem(newItem);
    };
    return [
      item, 
      saveItem
    ];
  };
function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);


  const [serarchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let todoSearchValue = [];
  if (!serarchValue.length >= 1) {
    todoSearchValue = todos;
  } else {
    todoSearchValue = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = serarchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // completar todo
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // eliminar todo
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    // newTodos[todoIndex].completed = false;
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
    completedTodos= { completedTodos }
    totalTodos = { totalTodos }
    serarchValue= { serarchValue }
    setSearchValue = { setSearchValue }
    todoSearchValue = {todoSearchValue}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
