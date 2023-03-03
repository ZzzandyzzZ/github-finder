import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

// export const Searcher = (): JSX.Element => {
//   return (
//     <Stack
//       direction='row'
//       sx={{
//         marginTop: '30px',
//         width: '80%'
//       }}
//     >
//       <TextField
//         label='Github User'
//         placeholder='Search user'
//         variant='outlined'
//         sx={{
//           width: '90%'
//         }}/>
//       <IconButton>
//         <SearchIcon />
//       </IconButton>
//     </Stack>
//   )
// }
export const Searcher = (): JSX.Element => {
  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}
    >
      <TextField
        fullWidth
        label='Github User'
        placeholder='Search user'
        variant='outlined'
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  )
}
