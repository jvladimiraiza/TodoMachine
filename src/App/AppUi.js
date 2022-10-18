import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUi( {
    completedTodos,
    totalTodos,
    serarchValue,
    setSearchValue,
    todoSearchValue,
    completeTodo,
    deleteTodo
    }
) {
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

export {AppUi}