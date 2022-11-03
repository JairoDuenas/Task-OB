import React, { useState } from "react"
// Definiendo estilos en constantes
// ? Estilo para usuario logueado
const loggedStyle = {
  color: "white",
}

// ? Estilo para usuario no logueado
const unLoggedStyle = {
  color: "tomato",
  fontWeight: "bold",
}

const GreetingStyled = (props) => {
  // Generamos un stado para el componente
  // y así controlar si el usuario está o no logueado

  const [logged, setLogged] = useState(false)

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
      {logged ? <p>Hola, {props.name} </p> : <p>Please login </p>}

      <button
        onClick={() => {
          console.log("Botón pulsado")
          setLogged(!logged)
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default GreetingStyled
