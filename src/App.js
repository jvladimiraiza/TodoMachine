// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar Lechuga', completed: true },
  { text: 'Cortar Tomate', completed: false }
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
              key={todo.text} 
              texto={todo.text}
              completed={todo.completed} />
          ))}
      </TodoList>
      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
