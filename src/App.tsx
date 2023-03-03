import { Container } from '@mui/material'
import { Searcher } from './components/searcher/Searcher'

function App (): JSX.Element {
  return (
    <Container sx={{
      backgroundColor: 'whitesmoke',
      width: '80vw',
      height: '80vh',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher />
    </Container>
  )
}

export default App
