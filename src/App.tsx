import { Alert, Container, Divider, Grid, Paper, Snackbar } from '@mui/material'
import { Footer } from './components/UI/Footer'
import { Header } from './components/UI/Header'

import 'animate.css'
import { UserProfile } from './components/User/UserProfile'
import { UserResume } from './components/User/UserResume'
import { useAppSelector } from './hooks/useStore'
import { useUserStore } from './store/hooks/useUserStore'

function App (): JSX.Element {
  const { isUserLoading, errorMsg } = useAppSelector(state => state.user)
  const { clearErrorMsg } = useUserStore()
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      clearErrorMsg()
    }
  }
  return (
    <>

      <Container sx={{ py: 2 }} className='animate__animated animate__zoomIn'>
        <Header />
        <Paper elevation={5}
          className={isUserLoading ? 'animate__animated animate__fadeIn' : ''}
          sx={{ borderRadius: '0 0 20px 20px', bgcolor: '#F2F1F3' }}>
          <main>
            <Grid container justifyContent='center'>
              <Grid item xs={12} sm={12} md={4} alignItems='stretch'>
                <UserProfile />
              </Grid>
              <Grid item xs={12} sm={12} md={8} display='flex' alignItems='stretch'>
                <UserResume />
              </Grid>
            </Grid>
          </main>
          <Divider />
          <Footer />
        </Paper>
      </Container>
      <Snackbar open={errorMsg !== ''} onClose={handleClose}>
        <Alert severity="error" variant="filled">
          {errorMsg}
        </Alert>
      </Snackbar>
    </>
  )
}

export default App
