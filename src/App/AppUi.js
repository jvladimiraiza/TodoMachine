import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";

function AppUi() {
    const {
        error,
        loading,
        todoSearchValue,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
            <TodoList>
                { error && <p>Error !!!</p>}
                { loading && <p>Cargando ...</p>}
                {(!loading && !todoSearchValue.length) && <p>Crea tu primer todo</p>}
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