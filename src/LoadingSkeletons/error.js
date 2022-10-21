import React from "react";
import errorTask from "./errorTask.jpg";
import  "./index.css";
function ErrorLoading() {
    return(
        <img src={errorTask} className="errorTask" alt="img-error"/>
    );
}
export {ErrorLoading};