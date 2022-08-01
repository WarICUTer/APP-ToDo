import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas.jsx';

function App() {
  return (
    <div className="App-tareas">
      <div className='title-app'>
        <h1> Tareas Por Hacer </h1>
      </div>
      <div className='tareas-list-main'>
        <h2>Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
