import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {serarchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
            <input placeholder="Buscar" 
            value={serarchValue}
            className="TodoSearch" onChange={onSearchValueSearch}/>
    );
}
export {TodoSearch};