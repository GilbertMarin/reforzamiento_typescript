import React from 'react';
import { Formularios } from './Components/Formularios';
// import { Usuarios } from './Components/Usuarios';
//import { Login } from './Components/Login';
//import { ContadorConHook } from './Components/ContadorConHook';
//import { Contador } from './Components/Contador';
//import { Funciones } from './typescript/Funciones';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { TiposBasicos } from './typescript/TiposBasicos';
const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TypeScript React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
      


    </div>
  )
}

export default App