import React from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { getBooks } from '../../services/books'
import bookImage from '../../assets/images/book-cover.png'
import { postFavoriteBook } from '../../services/favorites'

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

    /* Hook que executa a função "getBooks()" e salva o retorno no state "books", sempre que o componente é montado. */
    /* Funções que realizam chamadas para APIs são assíncronas, porém, não podemos declará-las dentro do useEffect, */
    /* pois será lançado um erro de formatação */
    React.useEffect(() => {
        fetchBooks()
    }, [])
    
    // console.log("booksSearch", booksSearch);

    /* Funções que realizam chamadas para APIs são assíncronas, porém, não podemos declará-las dentro do useEffect, */
    /* pois será lançado um erro de formatação */
    async function fetchBooks() {
        const booksFromAPI = await getBooks()
        // console.log("Dentro do Fetch")
        // console.log(booksFromAPI)
        setBooks(booksFromAPI)
    }

    async function insertFavoriteBook(id) {
        await postFavoriteBook(id)
        alert("Livro adicionado aos favoritos!")
    }

    /* Variável que guarda mapeamento do array de livros pesquisados, retornando um componente para cada livro */
    const booksShowcases = booksSearch.map( book => {
        return (
            <Result onClick={() => insertFavoriteBook(book.id)}>
                <img src={bookImage}/>
                <p>{book.name}</p>
            </Result>
        )
    }) 
    
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