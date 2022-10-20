import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        onClickModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        onClickModal();
    };
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    return (
        <form onSubmit={onAdd}>
            <label> Escribe una nueva tarea </label>
            <textarea placeholder="Ingrese las nuevas tareas"
            value={newTodoValue}
            onChange={onChange}>

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel">
                    Cancelar
                    </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button-add">
                    Agregar
                    </button>
            </div>
        </form>
    );
}

export { TodoForm }