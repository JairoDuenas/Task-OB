import PropTypes from "prop-types"
import React, { useState } from "react"

const GreetingFunc = (props) => {
  // introducción a useState
  // const [variable, método para actualizarlo] = useState(valor inicial)

  const [age, setAge] = useState(29)
  const birthday = () => {
    // actualizamos el state
    setAge(age + 1)
  }
  return (
    <div>
      <h1>!HOLA {props.name} desde componente funcional </h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  )
}

GreetingFunc.propTypes = {
  name: PropTypes.string,
}

export default GreetingFunc
