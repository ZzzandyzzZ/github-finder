import { Paper, Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'

const DescriptionCard = ({ title, measure }: DescriptionCardProps): JSX.Element => {
  return (
    <Stack>
      <Typography align='center' variant='h4'>
        <strong>{measure}</strong>
      </Typography>
      <Typography align='center' variant='subtitle2' color='text.secondary'>
        {title}
      </Typography>
    </Stack>
  )
}
export const UserDescription = (): JSX.Element => {
  const { user: { NoRepos, followers, following } } = useAppSelector(state => state.user)
  return (
    <Paper sx={{ m: 1, p: 1 }} elevation={4}>
      <Stack direction='row' justifyContent='space-around'>
        <DescriptionCard title='Repos' measure={NoRepos}/>
        <DescriptionCard title='Followers' measure={followers}/>
        <DescriptionCard title='Following' measure={following}/>
      </Stack>
    </Paper>
  )
}
