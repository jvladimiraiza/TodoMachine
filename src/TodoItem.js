import React from "react";
import "./TodoItem.css"
function TodoItem(props) {
    const onClomplete = () => {
        alert('ya completaste el todo ' + props.texto);
    };
    const onDelete = () => {
        alert('borraste el todo ' + props.texto);
    };
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onClomplete}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.texto}
            </p>
            <span className="Icon Icon-delete"
            onClick={onDelete}>
                X
            </span>
        </li>
    );
}

export {TodoItem};