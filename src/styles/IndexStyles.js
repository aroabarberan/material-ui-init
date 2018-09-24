import { createMuiTheme } from '@material-ui/core'
import { deepOrange, brown } from '@material-ui/core/colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
      contrastText: '#fff',
    },
    secondary: {
      main: brown[700],
      contrastText: '#fff',
    },
  },
})
console.log(theme)

export default theme