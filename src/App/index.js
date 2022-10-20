import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext";


// const defaultTodos = [
//   {  id: 1, text: 'Cortar cebolla', completed: false },
//   { id: 2, text: 'Cortar Lechuga', completed: true },
//   { id: 3, text: 'Cortar Tomate', completed: false }
// ];
//   const defaultTodos = [
//     {  id: 1, text: 'Cortar cebolla', completed: false },
//     { id: 2, text: 'Cortar Lechuga', completed: true },
//     { id: 3, text: 'Cortar Tomate', completed: false }
//   ];

function App() {

  
  return (

    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
