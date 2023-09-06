import React from "react"
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TypeWork } from "../components/TypeWork";
import { Modal } from "../components/UI/Modal/Modal";
import { FormTodo } from "../components/FormTodo";

function AppUI({
    setVisible,
    devimg,
    completedTodos,
    totalTodos,
    serchValue,
    setSerchValue,
    searchTodos,
    completeTodo,
    deletTodo,
    visible
}) {
    
   
    return(
        <>
        <header>
          <nav className="container d-flex justify-content-between">
            <CreateTodoButton setVisible={setVisible} />
          </nav>
        </header>
        {/* "<></>" It's a way to render  a component without div  */}
        <main>
          <section id="title" className="animate__animated animate__slideInDown">
            <div className="container d-flex justify-content-evenly">
              <img alt="devimg" src={devimg} className="developer-img " />
              <div className="profile-info">
                <h1>
                  <TypeWork />
                </h1>
                <h2 className="description-profile">
                  Soy Programador <span> FullStack</span>
                </h2>
                <TodoCounter
                  todosCompleted={completedTodos}
                  totalTodos={totalTodos}
                />
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
                src={require("../assets/images/wilsondev4.jpg")}
              />
            </div>
          </section>
          {/* TodoCounter is our component for count the tasks completed and to do */}
          <section id="list" className="">
            <div className="container">
              {/* TodoSearch is our component for search the tasks completed and to do */}
  
              <TodoSearch serchValue={serchValue} setSerchValue={setSerchValue} />
              {/* TodoList is our component for list the tasks completed and to do */}
              <TodoList>
                {loading && <p>Estamos cargando...</p>}
                {error && <p>Desespérate, hubo un error...</p>}
                {!loading && searchedTodos.length === 0  && <p>Crea tu primer TODO!</p>}
                {/* TodoItem is our component for show each the tasks*/}
                {/* We traverse the list with map, to render a new list of components but with their properties */}
                {searchTodos.map((todo) => (
                  <TodoItem
                    Item
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deletTodo(todo.text)}
                  />
                ))}
              </TodoList>
            </div>
          </section>
          <Modal visible={visible}>
            <FormTodo
              setVisible={setVisible}
              // CreateNewTask={CreateNewTask}
            />
          </Modal>
        </main>
      </>
    )
}

export default AppUI