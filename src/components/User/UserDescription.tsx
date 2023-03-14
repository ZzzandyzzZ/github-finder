import { Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'

const DescriptionCard = ({ title, measure }: DescriptionCardProps): JSX.Element => {
  return (
    <Stack>
      <Typography align='center'>
        {title}
      </Typography>
      <Typography align='center' variant='subtitle1'>
        {measure}
      </Typography>
    </Stack>
  )
}
export const UserDescription = (): JSX.Element => {
  const { user: { NoRepos, followers, following } } = useAppSelector(state => state.user)
  return (
    <Stack direction='row' justifyContent='space-between'>
      <DescriptionCard title='Repos' measure={NoRepos}/>
      <DescriptionCard title='Followers' measure={followers}/>
      <DescriptionCard title='Following' measure={following}/>
    </Stack>
  )
}
