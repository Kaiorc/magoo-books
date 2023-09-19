import React from 'react'
import styled from 'styled-components'
import { getFavoriteBooks } from '../services/favorites'
import bookImage from '../assets/images/book-cover.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Result = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Title = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

export default function Favorites() {
  const [favoriteBooks, setFavoriteBooks] = React.useState([])

  /* Funções que realizam chamadas para APIs são assíncronas, porém, não podemos declará-las dentro do useEffect, */
  /* pois será lançado um erro de formatação */
  React.useEffect(() => {
    fetchFavoriteBooks()
  },[])

  async function fetchFavoriteBooks() {
    const favoriteBooksFromAPI = await getFavoriteBooks()
    setFavoriteBooks(favoriteBooksFromAPI)
  }

  /* Variável que guarda mapeamento do array de livros favoritos, retornando um componente para cada livro */
  const favoriteBooksShowcases = favoriteBooks.map( book => {
    return (
        <Result>
            <img src={bookImage}/>
            <p>{book.name}</p>
        </Result>
    )
  }) 

  return (
    <AppContainer>
      <div>
        <Title> Aqui estão seus livros favoritos: </Title>
        <ResultContainer>
          {favoriteBooks.lenght != 0 ? favoriteBooksShowcases : null }
        </ResultContainer>
      </div>
    </AppContainer>
  )
}