import { Avatar, Box, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
export const UserProfile = (): JSX.Element => {
  const { user: { avatarUrl, username, name, createdDate } } = useAppSelector(state => state.user)
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' height='100%'>
      <Avatar
        src={avatarUrl}
        alt='Github Avatar'
        sx={{ m: 2, width: 'auto', height: 'auto' }}
      />
      <Typography variant='h4' align='center'>
        {name}
      </Typography>
      <Typography align='center'>
        @{username}
      </Typography>
      <Typography align='center'>
        Joined {new Date(createdDate).toLocaleDateString('en-US', options)}
      </Typography>
    </Box>

  )
}
