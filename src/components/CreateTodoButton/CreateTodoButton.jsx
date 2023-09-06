import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './CreateTodoButton.scss'

function CreateTodoButton({ setVisible }){

    // let [state, setState] = React.useState(0);

    // const clickTodo = ()=>{
    //     setState(state++)
    // }

    const TodoCreate = (event) => {
        setVisible(true);
    };


    // const onCompletedTodo= () => {
    //   }

    return(
        <button 
        className="CreateTodoButton"
        onClick={TodoCreate}
        type="button"
        
        >
            
            <FontAwesomeIcon icon={faPlus} />
            </button>
        
    );
}
export  {CreateTodoButton}