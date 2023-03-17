import { Avatar, Grid, Skeleton, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }

const avatarSx = { m: 2, width: { xs: 1 / 2, sm: 1, md: 3 / 4 }, height: 'auto' }

const UserProfileName = (): JSX.Element => {
  const { user: { username, name, createdDate } } = useAppSelector(state => state.user)
  return (
    <>
      <Typography variant='h4' align='center'>
        <strong>{name}</strong>
      </Typography>
      <Typography align='center' variant='subtitle1' color='text.secondary'>
         @{username}
      </Typography>
      <Typography align='center' variant='subtitle2' color='text.secondary'>
         Joined {new Date(createdDate).toLocaleDateString('en-US', options)}
      </Typography></>
  )
}
export const UserProfile = (): JSX.Element => {
  const { user: { avatarUrl }, isUserLoading } = useAppSelector(state => state.user)
  return (
    <Grid container item justifyContent='center' alignItems='center' height={1}>
      <Grid item xs={12} sm={3} md={12} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        {isUserLoading
          ? <Skeleton variant='circular' sx={avatarSx} width={150} height={150}/>
          : <Avatar
            src={avatarUrl}
            alt='Github Avatar'
            sx={avatarSx}
          />}
      </Grid>
      <Grid item xs={12} sm={3} md={12} display='flex' textAlign='center' flexDirection='column' alignItems='center' justifyContent='center'>
        {isUserLoading ? <Skeleton width='90%' height={100}/> : <UserProfileName />}
      </Grid>
    </Grid>
  )
}
