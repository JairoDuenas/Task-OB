/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from "react"

class LifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log("constructor: Cuando se instancia el componente")
  }

  componentWillMount() {
    console.log("WillMount: Antes del montaje del componente")
  }
  componentDidMount() {
    console.log(
      "DidMount: Justo al del montaje del componente, antes de renderizarlo",
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps: Si va recibir nuevas props")
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Controlar si el componente debe o no actualizarse
     */
    // return true / false
    //console.log("shouldComponentUpdate: ")
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: Justa antes de actualizarse")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Justo después de actualizarse")
  }

  componentWillUnmount() {
    console.log("COMPONENTWILLUNMOUNT: Justo antes de desaparecer")
  }

  render() {
    return <div></div>
  }
}

LifeCycleExample.propTypes = {}

export default LifeCycleExample
