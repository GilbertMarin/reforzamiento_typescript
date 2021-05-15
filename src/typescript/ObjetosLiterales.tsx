import React from 'react'

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}
interface Direccion {
    pais: string;
    casaNo: number
}

export const ObjetosLiterales = () => {

    const Persona ={
        nombreCompleto:'Gilbert',
        edad:35,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }

    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(Persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
