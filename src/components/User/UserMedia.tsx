import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAppSelector } from '../../hooks/useStore'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import WebIcon from '@mui/icons-material/Web'
import TwitterIcon from '@mui/icons-material/Twitter'

const MediaCard = ({ Icon, content }: MediaCardProps): JSX.Element => {
  return (
    <Box width='50%'>
      <Typography variant='subtitle1' align='center'>
        {Icon}
        {content}
      </Typography>
    </Box>
  )
}
export const UserMedia = (): JSX.Element => {
  const { user: { blogUrl, company, location, twitterUsername } } = useAppSelector(state => state.user)
  return (
    <Box display='flex' flexWrap='wrap'>
      <MediaCard Icon={<WebIcon />} content={blogUrl}/>
      <MediaCard Icon={<CorporateFareIcon />} content={company}/>
      <MediaCard Icon={<LocationOnIcon />} content={location}/>
      <MediaCard Icon={<TwitterIcon />} content={twitterUsername}/>
    </Box>
  )
}
