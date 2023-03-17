import { createTheme } from '@mui/material'

export const blueTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#192c73',
      light: '#686DA8'
    },
    secondary: {
      main: '#CDD5EA'
    },
    background: {
      default: '#CDD5EA',
      paper: '#cccbcc'
    }
  }

})
