import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import ReactLoading from "react-loading";
import "./App.css";

function AppUi() {
    const {
        error,
        loading,
        todoSearchValue,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter/>
        
        <TodoSearch/>
        <TodoList>
            { error && <p>Error !!!</p>}
            { loading &&
            <div className="divCenter">
            <ReactLoading type="spinningBubbles" color="#fff"/>
            </div>
            // <div className="containerProgress">
            //     <div className="progess"></div>
            // </div>
            }
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
        { openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export {AppUi}