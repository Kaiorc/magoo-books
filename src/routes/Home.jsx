import Search from '../components/Search'
import NewReleases from '../components/NewReleases'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

export default function Home() {
  return (
    <AppContainer>
      <Search />
      <NewReleases />
    </AppContainer>
  )
}