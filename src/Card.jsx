import './Card.css'
import React from 'react'

export default props =>
    <div  ClassName="Card" >
        <div ClassName="Conteudo" >
            {props.titulo}
        </div>
        <div ClassName="Footer" >
            {props.children}
        </div> 
    </div>