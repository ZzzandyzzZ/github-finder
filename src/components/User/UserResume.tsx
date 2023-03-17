import { Grid, Skeleton } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'
import { UserDescription } from './UserDescription'
import { UserMedia } from './UserMedia'
import { UserRepositories } from './UserRepositories'

export const UserResume = (): JSX.Element => {
  const { isUserLoading, isReposLoading } = useAppSelector(state => state.user)
  return (
    <Grid item container >
      <Grid item xs={12} sm={6} display='flex' flexDirection='column' justifyContent='center'>
        {isUserLoading ? <Skeleton width='90%' height={100} sx={{ alignSelf: 'center' }}/> : <UserDescription />}
        {isUserLoading ? <Skeleton width='90%' height={80} sx={{ alignSelf: 'center' }}/> : <UserMedia />}
      </Grid>
      <Grid item xs={12} sm={6} display='flex' flexDirection='column' justifyContent='center'>
        {isReposLoading ? <Skeleton width='90%' height='100%'sx={{ alignSelf: 'center' }}/> : <UserRepositories />}
      </Grid>
    </Grid>
  )
}
