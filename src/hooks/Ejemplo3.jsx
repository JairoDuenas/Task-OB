/**
 * Ejemplo Hooks
 * - useState()
 * - useContext()
 */

import React, { useContext, useState } from "react"

/**
 *
 * @return Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {
  // Inicializamos un estado que va a rellenarse con los
  // datos del contexto padre
  const state = useContext(miContexto)
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  )
}

const Componente2 = () => {
  const state = useContext(miContexto)
  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  )
}

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "12345",
    sesion: 1,
  }

  // creamos el estado del componente
  const [sesionData, setSesionData] = useState(estadoInicial)

  function actualizarSesion() {
    setSesionData({
      token: "TKL7654321",
      sesion: sesionData.sesion + 1,
    })
  }

  return (
    <div>
      <miContexto.Provider value={sesionData}>
        {/* Todo lo que esté aquí dentro puede leer los datos de sesionData */}
        {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
        <h1>*** Ejemplo de useState() y useContext()***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
      </miContexto.Provider>
    </div>
  )
}
