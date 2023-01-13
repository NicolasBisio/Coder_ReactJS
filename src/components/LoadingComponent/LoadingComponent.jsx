import React from 'react'
import "./LoadingComponent.css"
import loading from "../../img/loading.gif"

const LoadingComponent = () => {
  return (
    <div className="loading__contenedor"><img src={loading} className="loading__img" alt="Cargando..." /></div>
  )
}

export default LoadingComponent