import React from 'react';
import './index.css';

export default function HeaderOptions() {
    const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return(
        <ul className='options'>
            { textOptions.map ( (text) => (
                <li className='option'><p>{text}</p></li>
            ) ) }
        </ul>
    )
}