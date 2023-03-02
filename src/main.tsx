import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { blueTheme } from './theme/blueTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={blueTheme}>
  <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
