/**
 * Ejemplo de uso del hook useState
 *
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y además, poder modificarlo
 */

import React, { useState } from "react"

const Ejemplo1 = () => {
  // valor inicial
  const valorInicial = 0

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "Jairo",
    email: "jairoduenas.ing@gmail.com",
  }

  /**
   * Queremos que el valorInicial y personaInicial sean
   * parte del estado del componente para así poder gestionar su cambio
   * y que éste se vea reflejado en la vista del componente
   *
   * const [nombreVariable, funciónParaCambiar] = useState(valorInicial)
   */

  const [contador, setContador] = useState(valorInicial)
  const [persona, setPersona] = useState(personaInicial)

  /**
   * Función para actualizar el estado privado
   * que contiene el contador
   */

  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1)
  }

  /**
   * Función para actulizar el estado de persona
   * en el componente
   */

  function actualizarPersona() {
    setPersona({
      nombre: "pepe",
      email: "pepe@imagengroup.com",
    })
  }

  return (
    <div>
      <h1>** Ejemplo de useState</h1>
      <h2>CONTADOR: {contador} </h2>
      <h2>DATOS DE LA PERSONA: </h2>
      <h3>NOMBRE: {persona.nombre} </h3>
      <h3>EMAIL: {persona.email} </h3>

      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  )
}

export default Ejemplo1
