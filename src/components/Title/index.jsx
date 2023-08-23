import styled from 'styled-components'

/*Styled component que pode receber uma cor e/ou tamanho da fonte e/ou posicionamento*/
export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color || "#0000"};
    font-size: ${props => props.fontSize || "18px"};
    text-align: ${props => props.textAlign || "center"};
    margin: 0;
`