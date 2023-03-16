import { Grid } from '@mui/material'
import { UserDescription } from './UserDescription'
import { UserMedia } from './UserMedia'
import { UserRepositories } from './UserRepositories'

export const UserResume = (): JSX.Element => {
  return (
    <Grid item container >
      <Grid item xs={12} sm={6} display='flex' flexDirection='column' justifyContent='center'>
        <UserDescription />
        <UserMedia />
      </Grid>
      <Grid item xs={12} sm={6} display='flex' flexDirection='column' justifyContent='center'>
        <UserRepositories />
      </Grid>
    </Grid>
  )
}
