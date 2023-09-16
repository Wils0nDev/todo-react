import React from "react";
import "./App.scss";
import devimg from "../assets/svg/devimgdos.svg";
import AppUI from "./AppUI";
import { useModal } from "../components/UI/Modal/useModal";
import { useLocalStorage } from "../custom/hooks/useLocalStorage";

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
//localStorage.removeItem('TODOS_V1');

//CustomHooks :
// --Un custom hook es una función que realiza cierta funcionalidad
// --Siempre tiene que empezar con "use"+nombreFuncion
// --Puede ser compartido con distintos componentes.

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
    const [serchValue, setSerchValue] = React.useState("");
    const completedTodos = todos.filter((t) => t.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = serchValue.toLowerCase();
    return todoText.includes(searchText);
  });


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

  // const {

  //   CreateNewTask
  // } = useTodo();
  const { visible, setVisible } = useModal();
  return (
    <AppUI
      loading={loading}
      error={error}
      setVisible={setVisible}
      devimg={devimg}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      serchValue={serchValue}
      setSerchValue={setSerchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deletTodo={deletTodo}
      visible={visible}
    />
  );
}

export default App;
