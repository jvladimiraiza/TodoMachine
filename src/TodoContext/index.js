import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
        const {
            item: todos, 
            saveItem: saveTodos,
            loading,
            error,
        } = useLocalStorage('TODOS_V1', []);
        
        
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
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos);
        };
    
    return (
        <TodoContext.Provider value={{ 
            loading,
            error,
            completedTodos,
            totalTodos,
            serarchValue,
            setSearchValue,
            todoSearchValue,
            completeTodo,
            deleteTodo,
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };