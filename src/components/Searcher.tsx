import { Box, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
  inputUser: string
  setInputUser: (val: string) => void
}

export const Searcher = ({ inputUser, setInputUser }: Props): JSX.Element => {
  const handleSubmit = (): void => {

  }
  return (
    <Box m={3}>
      <TextField
        fullWidth
        label='Github User'
        placeholder='Search user'
        variant='outlined'
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Box>
  )
}
