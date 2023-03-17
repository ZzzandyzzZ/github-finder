import { List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/useStore'

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }

const RepoCardData = ({ name, createdDate = 0 }: RepoCardDataProps): JSX.Element => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={new Date(createdDate).toLocaleDateString('en-US', options)}/>
    </ListItem>
  )
}

const ListItems = ({ userRepos }: RepoListItemsProps): JSX.Element => {
  return (
    <>
      { userRepos.map(
        repo => <RepoCardData key={repo.id} name={repo.name} createdDate={repo.createdDate}/>
      )}
    </>
  )
}
const NoItems = (): JSX.Element => {
  return (
    <ListItem>
      <ListItemText primary={'Without repositories'} />
    </ListItem>
  )
}
export const UserRepositories = (): JSX.Element => {
  const { userRepos } = useAppSelector(state => state.user)
  return (
    <Paper sx={{ m: 2 }} elevation={4}>
      <Stack>
        <Typography variant='h5' align='center' paddingTop={2}><strong>Last Repositories</strong></Typography>
        <List disablePadding>
          {userRepos.length > 0 ? <ListItems userRepos={userRepos}/> : <NoItems />}
        </List>
      </Stack>
    </Paper>
  )
}
