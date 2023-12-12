import React from 'react';
import './TodoCounter.scss'
import { TodoContext } from '../../TodoContext';
function TodoCounter(){
    const {completedTodos,totalTodos} = React.useContext(TodoContext)
    return(
        <h2 className="title-counter">Has completado <span>{completedTodos}</span> de <span>{totalTodos} </span> Tareas</h2>
    );
}

export {TodoCounter}