import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

export default function Favorites() {
  return (
    <AppContainer>
      <h1> Aqui vai ficar a parte dos livros favoritados </h1>
    </AppContainer>
  )
}