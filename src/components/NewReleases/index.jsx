import React from "react";
import { Title } from "../Title";
import { books } from "./exampleData";
import RecommendationCard from "../RecommendationCard";
import bookImage from "../../assets/angular-book-cover.png";
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
                color="#9c27b0"
                fontSize="36px"
            >
                Últimos Lançamentos
            </Title>
            <NewBooksContainer>
                { booksShowcases }
            </NewBooksContainer>
            <RecommendationCard 
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                image={bookImage}
            />
        </NewReleasesContainer>
    )
}