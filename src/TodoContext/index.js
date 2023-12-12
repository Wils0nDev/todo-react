import React from 'react';

import { useLocalStorage } from "../custom/hooks/useLocalStorage";
import { useModal } from "../components/UI/Modal/useModal";

const TodoContext = React.createContext();
//We create a list of todos
// const defaultTodo = [
//   { text: "Filtro de busqueda de trabajadores", completed: true },
//   { text: "Conexion con endpoint de trabajadores", completed: false },
//   { text: "Crear una tabla para listar el trabajador", completed: true },
//   {
//     text: "Crear diseño de modal para registrar un trabajador",
//     completed: false,
//   },
//   {
//     text: "Ya hicimos el front de trueclock",
//     completed: true,
//   },
// ];
// const defaultTodoString = JSON.stringify(defaultTodo);
// localStorage.setItem("TODOS_V1", defaultTodoString);
// localStorage.removeItem('TODOS_V1');

//creamos nuestro propio provider personalizado

function TodoProvider({children}){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
        const [serchValue, setSerchValue] = React.useState("");
        const completedTodos = todos.filter((t) => t.completed).length;
        const totalTodos = todos.length;
        //Filtrando Todos
        const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = serchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    
      const addTodo = (text) => {
        const newTodo = [...todos]
        newTodo.push({
          text,
          completed:false
        })
        saveTodos(newTodo)
      }
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deletTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const { visible, setVisible } = useModal();

    return(
        <TodoContext.Provider value={{
            setVisible,
            completedTodos,
            totalTodos,
            serchValue,
            setSerchValue,
            //searchTodos,
            completeTodo,
            deletTodo,
            visible,
            loading,
            error,
            searchedTodos,
            addTodo

        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}