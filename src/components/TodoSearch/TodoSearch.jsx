import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './TodoSearch.scss';

function TodoSearch({serchValue,setSerchValue}){
    

    const filterTodo=(event)=>{
        setSerchValue(event.target.value)
    }
    
    return(
        <>
        <h2>Buscar tarea</h2>
        <div className="input-container">
            <FontAwesomeIcon className="icon" icon={faSearch}/>
            <input 
            className="TodoSearch"
            name="search" 
            placeholder="Busca la tarea" 
            value={serchValue}
            onChange={filterTodo}
            
            />
        </div>
        </>
    );
}

export {TodoSearch}