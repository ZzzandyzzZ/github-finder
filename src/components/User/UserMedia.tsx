import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAppSelector } from '../../hooks/useStore'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import WebIcon from '@mui/icons-material/Web'
import TwitterIcon from '@mui/icons-material/Twitter'

const MediaCard = ({ Icon, content }: MediaCardProps): JSX.Element => {
  return (
    <Box display='flex' flexDirection='row' sx={{ width: { xs: 1, sm: 1 / 2 } }} alignItems='center'>
      <Typography variant='subtitle2' align='center' px={1}>
        {Icon}
      </Typography>
      <Typography variant='subtitle2' align='center' color='text.secondary'>
        {content}
      </Typography>
    </Box>
  )
}
export const UserMedia = (): JSX.Element => {
  const { user: { blogUrl, company, location, twitterUsername } } = useAppSelector(state => state.user)
  return (
    <Paper sx={{ m: 1, p: 1 }} elevation={4}>
      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        <MediaCard Icon={<WebIcon />} content={blogUrl}/>
        <MediaCard Icon={<CorporateFareIcon />} content={company}/>
        <MediaCard Icon={<LocationOnIcon />} content={location}/>
        <MediaCard Icon={<TwitterIcon />} content={twitterUsername}/>
      </Box>
    </Paper>
  )
}
