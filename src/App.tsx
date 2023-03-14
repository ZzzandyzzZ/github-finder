import { Container, Divider, Grid, Paper } from '@mui/material'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import 'animate.css'
import { UserProfile } from './components/User/UserProfile'
import { UserResume } from './components/User/UserResume'

function App (): JSX.Element {
  return (
    <Container sx={{ py: 2 }}>
      <Header />
      <Paper elevation={5} sx={{ borderRadius: '0 0 20px 20px' }}>
        <main>
          <Grid container>
            <Grid item xs={4}>
              <UserProfile />
            </Grid>
            <Grid item xs={8} display='flex' alignItems='stretch'>
              <UserResume />
            </Grid>
          </Grid>
        </main>
        <Divider />
        <Footer />
      </Paper>
    </Container>
  )
}

export default App
