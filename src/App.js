import "./App.css";
//import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";
//import NotificationManager from "./components/pure/NotificationManager";
//import Updater from "./components/seviceWorker/Updater";
//import AxiosExample from "./components/pure/AxiosExample"
//import FetchExample from "./components/pure/FetchExample"
//import OpcionalRender from "./components/pure/opcionalRender"
//import Father from "./components/containers/father"
//import TaskListComponent from "./components/containers/task_list"
//import LoginFormik from "./components/pure/forms/loginFormik"
//import RegisterFormik from "./components/pure/forms/registerFormik"
//import GreetingStyled from "./components/pure/greetingStyled"
//import Ejemplo1 from "./hooks/Ejemplo1"
//import AsyncExample from "./components/pure/AsyncExample"
//import ObservableExample from "./components/pure/ObservableExample"
import Todo from "./testComponents/Todo";

function App() {
  /* const version = "app-v3-front"; */
  const todos = [
    { id: 1, text: "Hacer la cama", completed: true },
    { id: 2, text: "Cocinar", completed: false },
    { id: 3, text: "Aprender programación", completed: false },
  ]
  return (
    <div className="App">
      {/* <h1>Versión {version}</h1> */}
      {/* Componente propio Greeting.js */}
      {/* <Greeting name="Jairo"></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingFunc name="Jairo"></GreetingFunc> */}
      {/* Componente de listado de tareas */}
      {/* <TaskListComponent /> */}
      {/* Ejemplos de usos de hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}

      {/* <Ejemplo4 nombre="Jairo"> */}
      {/* Todo lo que hay aquí es tratado como props.children */}
      {/* <h3>Contenido del props.children</h3> */}
      {/* </Ejemplo4> */}
      {/* <GreetingStyled name="Jairo"></GreetingStyled> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de Renderizado condicional */}
      {/* <OpcionalRender></OpcionalRender> */}

      {/* Ejemplo de uso de formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample /> */}
      {/* <ObservableExample/> */}
      {/* <FetchExample></FetchExample> */}

      {/* <AxiosExample /> */}
      {/* <AxiosCRUDExample /> */}
      {/* <NotificationManager /> */}

      {/* Proyecto final */}
      {/* <TaskListComponent /> */}
      {/* <Updater /> */}
      <h1>Bienvenid@</h1>
      {todos.map(todo => <Todo todo={todo}/>)}
    </div>
  );
}

export default App;
