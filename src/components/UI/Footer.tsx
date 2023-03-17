import { Box, Link, Typography } from '@mui/material'

export const Footer = (): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      component='footer'
    >
      <Typography color="text.secondary" m={1}>
      Copyright © {' '}
        <Link color="inherit" href="https://github.com/ZzzandyzzZ">
          ZzzandyzzZ
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  )
}
