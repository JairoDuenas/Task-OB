import React from "react"
import ReactDOM from "react-dom/client"
// Añadimos Boostrap al proyecto
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.css"
// ! Los estilos propios deben ir debajo de bootstrap
import App from "./App"
//import AppRoutingOne from "./AppRoutingOne"
//import AppRoutingFinal from "./AppRoutingFinal"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { onServiceWorkerUpdate } from "@3m1/service-worker-updater";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne/> */}
    {/* <AppRoutingFinal/> */}
  </React.StrictMode>,
)

serviceWorkerRegistration.register({
  onUpdate: onServiceWorkerUpdate
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
