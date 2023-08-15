import './TodoCounter.scss'
function TodoCounter(props){
    return(
        <h2 className="title-counter">Has completado <span>{props.todosCompleted}</span> de <span>{props.totalTodos} </span> Tareas</h2>
    );
}

export {TodoCounter}