import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }

const RepoCardData = ({ name, createdDate = 0 }: RepoCardDataProps): JSX.Element => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={new Date(createdDate).toLocaleDateString('en-US', options)}/>
    </ListItem>
  )
}

export const UserRepositories = (): JSX.Element => {
  const { userRepos } = useAppSelector(state => state.user)
  return (
    <Stack>
      <Typography variant='h5' align='center'>Last Repositories</Typography>
      <List>
        {userRepos.map(
          repo => <RepoCardData key={repo.id} name={repo.name} createdDate={repo.createdDate}/>
        )}
      </List>
    </Stack>
  )
}
