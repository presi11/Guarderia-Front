import React from 'react'
import {Button} from '@mui/material'
//Estilo individual para el action button

//Action button
const ActionButton = (props) => {
    //Extraigo las props pasadas
    const {color, children, onClick} = props
    //asigno los estilos a una variable styles

    //Boton a renderizar con su props customizadas
    return (
        <Button
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ActionButton
