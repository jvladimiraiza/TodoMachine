// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  {  id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Cortar Lechuga', completed: true },
  { id: 3, text: 'Cortar Tomate', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);

  };

  // eliminar todo
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    // newTodos[todoIndex].completed = false;
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter 
      completedTodos= { completedTodos }
      totalTodos = { totalTodos }
      />

      <TodoSearch 
      serarchValue= { serarchValue }
      setSearchValue = { setSearchValue }
      />
      
      <TodoList>
          { todoSearchValue.map(todo => (
              <TodoItem 
              key={todo.id} 
              texto={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)} />
          ))}
      </TodoList>
      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
