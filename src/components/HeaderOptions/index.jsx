import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsList = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

export default function HeaderOptions() {
    const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return(
        <OptionsList>
            { textOptions.map ( (text) => (
                <Link to={`/${text.toLowerCase().replace(/\s/g, '')}`}> <Option className='option'> <p>{text}</p> </Option> </Link>
            ) ) }
        </OptionsList>
    )
}