import React from "react";
import './FormTodo.scss';
import { TodoContext } from "../../TodoContext";

function FormTodo(){
    const { setVisible,addTodo} = React.useContext(TodoContext)
    const [textValue, setTextValue] = React.useState('');

    const closeForm = () => {
        setTextValue('');
        setVisible(false);
    }

    const newTodo = (event) => {
        event.preventDefault();
        addTodo(textValue)
        setTextValue('');
        setVisible(false);
    }

    return (
        <section className="form-modal h-100 d-flex flex-column">
            <h1>Registra tu tarea</h1>
            <form onSubmit={newTodo} className="d-flex flex-column justify-content-between h-100">
                <div>
                    <label htmlFor="text-task" className="form-label"></label>
                    <div className="input-group">
                        <input 
                        type="text" 
                        onChange={(event) => (setTextValue(event.target.value))} 
                        value={textValue} 
                        className="form-control" 
                        id="text-task"
                        placeholder="Aqui escribe tu tarea"
                        />
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <button className="primary" type="submit">Agregar</button>
                    <button  className="secundary" type="button" onClick={closeForm} >Cancel</button>
                </div>
            </form>
        </section>         
    );
}

export {FormTodo}