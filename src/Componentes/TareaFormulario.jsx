import React, { useState } from "react";
import '../Styles/Formulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

  const[input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault();
    console.log('enviado')
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  };

  return (
    <form 
      className="tarea-form"
      onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type='text'
        placeholder='Escribe un Tarea'
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;