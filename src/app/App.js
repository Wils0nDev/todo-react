import React from "react";
import "./App.scss";
import AppUI from "./AppUI";
import { TodoProvider } from "../TodoContext";



//CustomHooks :
// --Un custom hook es una función que realiza cierta funcionalidad
// --Siempre tiene que empezar con "use"+nombreFuncion
// --Puede ser compartido con distintos componentes.

function App() {
 

  // const {

  //   CreateNewTask
  // } = useTodo();
  return (
    <TodoProvider>
     <AppUI />
    </TodoProvider>
  );
}

export default App;
