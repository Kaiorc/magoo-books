import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { getBooks } from '../../services/books'

// Bloco de estilização dos styled components
const SearchContainer = styled.section`
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

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function Search() {
    /* State que salva o array de livros pesquisados */ 
    const [booksSearch, setBooksSearch] = React.useState([])
    const [books, setBooks] = React.useState([])

    /* Hook que executa a função "getBooks()" e salva o retorno no state "books", sempre que o componente é montado */
    React.useEffect(() => {
        const booksFromAPI = getBooks()
        setBooks(booksFromAPI)
    }, [])

    /* Variável que guarda mapeamento do array de livros pesquisados, retornando um componente para cada livro */
    const booksShowcases = booksSearch.map( book => (
        <Result>
            <img src={book.src}/>
            <p>{book.name}</p>
        </Result>
    )) 
    
    /* Função que é executada quando o input perde o Blur (foco) */
    const handleOnBlur = event => {
        const enteredValue = event.target.value
        if(enteredValue != ""){
            const searchResult = books.filter(book => book.name.toLowerCase().includes(enteredValue.toLowerCase()))
            setBooksSearch(searchResult)
        } else {
            setBooksSearch([])
        }
    }

    return(
        <SearchContainer>
            <Title>Já Sabe o que procura?</Title>
            <Subtitle>Pesquise na estante</Subtitle>
            <Input 
                placeholder="Escreva aqui sua pesquisa"
                onBlur={ handleOnBlur }
            />
            { booksShowcases }
        </SearchContainer>
    )
}