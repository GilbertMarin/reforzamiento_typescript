//import React from 'react'

export const TiposBasicos = () => {
    const nombre: string= "Fernando";
    const edad: number=35;
    const estaActivo: boolean = false;
    const poderes: string[]  = ['Velocidad', 'Volar', 'Respirar en el agua']
  
    return (
        <>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'Activo':'No Activo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
