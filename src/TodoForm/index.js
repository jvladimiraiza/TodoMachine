import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
import imgTask from "./task.jpg"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        // onClickModal
    } = React.useContext(TodoContext);

    // const onCancel = () => {
    //     onClickModal();
    // };
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    return (
        <div className="col-sm-12">
            <form onSubmit={onAdd}>
                <div className="form-group">
                    <label>Escribe una nueva tarea</label>
                    <textarea placeholder="Ingrese las nuevas tareas"
                    value={newTodoValue}
                    onChange={onChange}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
                <div className="form-group">
                    <img src={imgTask} className="taskImg" alt="logo-task"/>
                </div>
            </form>
        </div>
    );
}

export { TodoForm }