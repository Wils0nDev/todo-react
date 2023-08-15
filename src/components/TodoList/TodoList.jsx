//props : is the way  to communicate components
//children : these are components children (TodoItem) that comming in the props 
import './TodoList.scss';

function TodoList(props){
    return(
        <>
            <h2>Tareas</h2>
            <ul>
                {props.children}
            </ul>
        </>
        
    );
}

export {TodoList}