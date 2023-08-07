import "./App.scss";
import { React } from "react";
import devimg from './assets/svg/devimgdos.svg'

import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import {TypeWork} from "./components/TypeWork/TypeWork";
function App() {
  //We create a list of todos
  const defaultTodo = [
    { text: "Filtro de busqueda de trabajadores", completed: true },
    { text: "Conexion con endpoint de trabajadores", completed: false },
    { text: "Crear una tabla para listar el trabajador", completed: false },
    {
      text: "Crear diseño de modal para registrar un trabajador",
      completed: false,
    },
  ];
  return (
    < >
      <header >
        <nav className="container d-flex justify-content-between">
          {/* <div className='img-conteiner'>
                <img alt='Wilson Vasquez' src={require('./assets/images/wilsondev4.jpg')} />
            </div> */}
          <CreateTodoButton />
        </nav>
      </header>
      {/* "<></>" It's a way to render  a component without div  */}
      <main >
        <section id="title" className="animate__animated animate__slideInDown">
          <div className="container d-flex justify-content-evenly">
            <img 
            alt="devimg"
            src={devimg}
            className="developer-img "
             />
            <div className="profile-info">
              <h1>
                 <TypeWork />
              </h1>
              <h2>
                Soy Programador <span> FullStack</span>
              </h2>
              <TodoCounter totalTodos={25} todosCompleted={16} />
            </div>
          </div>
          

          <div className="custom-shape-divider-bottom">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>  
          </div>
         
          <div className="img-conteiner ">
            <img
              className="profile-img"
              alt="Wilson Vasquez"
              src={require("./assets/images/wilsondev4.jpg")}
            />
          </div>
         
        </section>
        {/* TodoCounter is our component for count the tasks completed and to do */}
        <section id="list" className="">

          <div className="container">
            {/* TodoSearch is our component for search the tasks completed and to do */}

            <TodoSearch />
            {/* TodoList is our component for list the tasks completed and to do */}
            <TodoList>
              {/* TodoItem is our component for show each the tasks*/}
              {/* We traverse the list with map, to render a new list of components but with their properties */}
              {defaultTodo.map((todo) => (
                <TodoItem
                  Item
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                />
              ))}
            </TodoList>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
