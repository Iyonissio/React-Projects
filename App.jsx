import './App.css'
import './Card.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComPraramentro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default (props) => 
    <div className="App">
    <Card titulo="Produto 1 / Componente1">
    <Primeiro></Primeiro>
    <ComPraramentro Titulo="Mandioca"
                subtitulo="Batat Doce"></ComPraramentro>
    </Card>
    <Card titulo="Produtos 2 / Componente2">
    <ComFilhos>
        <ul>
            <li>Batata</li>
            <li>Arroz</li>
            <li>Cebola</li>
            <li>Cenourar</li>
        </ul>
    </ComFilhos>
    </Card>

    {/*<ComFilhos>
        <ul>
            <li>Iyonissio</li>
            <li>Daniel</li>
            <li>Sitoe</li>
            <li>Valter</li>
        </ul>
    </ComFilhos>
     <Primeiro></Primeiro>,
    <ComPraramentro Titulo="Esse e o Titulo"
                subtitulo="Esse e o Subtitulo"></ComPraramentro> */}
</div>
 
