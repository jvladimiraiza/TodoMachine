import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import ReactLoading from "react-loading";
import { ErrorLoading } from "../LoadingSkeletons/error";
import { ListVaciaImg } from "../LoadingSkeletons/listVacia";
import "./App.css";

function AppUi() {
    const {
        error,
        loading,
        todoSearchValue,
        completeTodo,
        deleteTodo,
        // openModal,
        // setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter/>
        <div className="row">
            <div className="col-sm-6">
                <TodoForm/>
            </div>
            <div className="col-sm-6">
                <TodoSearch/>
                <TodoList>
                    { error &&
                        <ErrorLoading/>
                    }
                    { loading &&
                    <div className="divCenter">
                    <ReactLoading type="spinningBubbles" color="#fff"/>
                    </div>
                    // <div className="containerProgress">
                    //     <div className="progess"></div>
                    // </div>
                    }
                    {(!loading && !todoSearchValue.length) &&
                        <ListVaciaImg/>
                    }
                    { todoSearchValue.map(todo => (
                        <TodoItem 
                        key={todo.id} 
                        texto={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)} />
                    ))}
                </TodoList>
            </div>
        </div>
        {/* <CreateTodoButton
        setOpenModal={setOpenModal}
        /> */}
    </React.Fragment>
    );
}

export {AppUi}