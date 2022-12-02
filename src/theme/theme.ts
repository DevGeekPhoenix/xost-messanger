import { createTheme, ThemeOptions } from '@mui/material/styles'
import breakpoints from './breakpoints'
import components from './components'
import lightPalette from './lightPalette'
import darkPalette from './darkPalette'
import shadows from './shadows'
import transitions from './transitions'
import typography from './typography'

const options: Omit<IThemeOptions, 'palette'> = {
  shadows,
  typography,
  spacing: 4,
  transitions,
  breakpoints,
  components,
  shape: { borderRadius: 4 },
}

export const lightTheme = createTheme({
  ...options,
  palette: lightPalette,
  darkMode: false,
} as ThemeOptions) as unknown as ITheme

export const darkTheme = createTheme({
  ...options,
  palette: darkPalette,
  darkMode: true,
} as ThemeOptions) as unknown as ITheme
