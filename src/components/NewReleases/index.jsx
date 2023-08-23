import React from "react";
import { books } from "./exampleData";
import styled from 'styled-components'

const NewReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #7c11e2;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function NewReleases() { 

    const booksShowcases = books.map(book => (
        <img src={book.src}/>
    ))

    return(
        <NewReleasesContainer>
            <Title>Últimos Lançamentos</Title>
            <NewBooksContainer>
                { booksShowcases }
            </NewBooksContainer>
        </NewReleasesContainer>
    )
}