import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './TodoSearch.scss'

function TodoSearch(){
    return(
        <>
        <h2>Search task</h2>
        <div className="input-container">
            <FontAwesomeIcon className="icon" icon={faSearch}/>
            <input name="search" placeholder="Busca la tarea"  />
        </div>
        </>
    );
}

export {TodoSearch}