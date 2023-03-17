import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useRef, useState } from 'react'
import { useUserStore } from '../../store/hooks/useUserStore'

export const Header = (): JSX.Element => {
  const { startLoadingUser, startLoadingRepos } = useUserStore()
  const [inputClicked, setInputClicked] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const timeoutRef = useRef<number | null>(null)
  const handleInputClick = (): void => {
    setInputClicked(true)
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setInputClicked(false)
    }, 500)
  }
  const handleSearchClick = (): void => {
    void startLoadingUser(searchInput)
    void startLoadingRepos(searchInput)
  }
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value)
  }
  return (
    <AppBar position="static" sx={{ borderRadius: '20px 20px 0 0' }} >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h4' component='div' sx={{ fontSize: { xs: '1rem', sm: '2rem' } }}>GitHub Finder</Typography>
        <InputBase
          className={inputClicked ? 'animate__animated animate__pulse' : ''}
          placeholder="Search Username"
          value={searchInput}
          onChange={handleSearchChange}
          onClick={handleInputClick}
          startAdornment={
            <IconButton type="button" color='inherit' onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          }
          sx={{ ml: 1, p: 0.1, borderRadius: 1, color: 'inherit', '&:hover': { bgcolor: 'primary.dark' } }}
        />
      </Toolbar>
    </AppBar>
  )
}
