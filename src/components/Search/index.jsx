import styled from 'styled-components'
import Input from '../Input'
import React from 'react'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

export default function Search() {
    const [searchText, setSearchText] = React.useState('')

    return(
        <SearchContainer>
            <Title>Já Sabe o que procura?</Title>
            <Subtitle>Pesquise na estante</Subtitle>
            <Input 
                placeholder="Escreva aqui sua pesquisa"
                onBlur={event => setSearchText(event.target.value)}
            />
            <p>{searchText}</p>
        </SearchContainer>
    )
}