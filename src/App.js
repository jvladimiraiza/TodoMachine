// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const TODOS = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar Lechuga', completed: true },
  { text: 'Cortar Tomate', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
          { TODOS.map(todo => (
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
