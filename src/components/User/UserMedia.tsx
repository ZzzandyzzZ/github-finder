import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAppSelector } from '../../hooks/useStore'

const MediaCard = ({ icon, content }) => {
  return (
    <Box width='50%'>
      <Typography variant='subtitle1' align='center'>{content}</Typography>
    </Box>
  )
}
export const UserMedia = (): JSX.Element => {
  const { user: { blogUrl, company, location, twitterUsername } } = useAppSelector(state => state.user)
  return (
    <Box display='flex' flexWrap='wrap'>
      <MediaCard content={blogUrl}/>
      <MediaCard content={company}/>
      <MediaCard content={location}/>
      <MediaCard content={twitterUsername}/>
    </Box>
  )
}
