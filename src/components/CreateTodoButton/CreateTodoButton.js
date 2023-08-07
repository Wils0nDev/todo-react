import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './CreateTodoButton.scss'

function CreateTodoButton(){
    return(
        <button type="button"><FontAwesomeIcon icon={faPlus} /></button>
        
    );
}
export  {CreateTodoButton}