import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const { onClickModal } = React.useContext(TodoContext);
    // const onClickButton = () => {
    //     props.setOpenModal(true);
    //     props.setOpenModal(prevState =>  !prevState);
    // };
    return (
        <button type="button" className="CreateTodoButton"
        onClick={() => onClickModal()}>
            +
        </button>
    );
}

export {CreateTodoButton};