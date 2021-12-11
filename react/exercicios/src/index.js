import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/Saudacao'

import BomDia from './componentes/BomDia'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
        
    </div>
, document.getElementById('root'))