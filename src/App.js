import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyle from './components/pure/greetingStyle';
import Father from './container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        
        {/*Componente ejemplo funcional y de clase */}
        {/*<Greeting name={"Agustina"}/>*/}
        {/*<GreetingF name="Agustina"></GreetingF>*/}
        {/*Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/*ejemplos de usos de hook*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/*todo lo que hay aqui dentro, es tratado como props.children*/}
        {/* <Ejemplo4 nombre ="agustina">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyle name="Agustina"></GreetingStyle> */}
      {/* </header> */}
      {/*gestion de eventos */}
      <Father></Father>
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}
export default App;
