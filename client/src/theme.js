import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#6d6c6c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#960000',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
