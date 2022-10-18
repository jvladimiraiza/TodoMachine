import React from "react";
import   "./TodoCounter.css"

function TodoCounter({ completedTodos, totalTodos }) {
    return (
        <h2 className="TodoCounter"> 
            Has Completado {completedTodos} de {totalTodos} Todos
        </h2>
    );
}
export { TodoCounter };