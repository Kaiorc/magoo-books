import React from "react";
import { Title } from "../Title";
import { books } from "./exampleData";
import styled from 'styled-components'

const NewReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
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
            <Title 
                color="#7C11E2"
                fontSize="36px"
            >
                Últimos Lançamentos
            </Title>
            <NewBooksContainer>
                { booksShowcases }
            </NewBooksContainer>
        </NewReleasesContainer>
    )
}