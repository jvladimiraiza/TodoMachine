import React from "react";
import "./TodoSearch.css";

function TodoSearch({serarchValue, setSearchValue}) {

    const onSearchValueSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <input placeholder="Cebolla" 
        value={serarchValue}
        className="TodoSearch" onChange={onSearchValueSearch}/>
    );
}
export {TodoSearch};