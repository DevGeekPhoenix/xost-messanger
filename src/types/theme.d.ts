type Color = import("@mui/material").Color;
type SimplePaletteColorOptions =
  import("@mui/material").SimplePaletteColorOptions;
type Theme = import("@mui/material/styles").Theme;
type ThemeOptions = import("@mui/material/styles").ThemeOptions;
type Breakpoints = import("@mui/material/styles").Breakpoints;
type BreakpointsOptions = import("@mui/material/styles").BreakpointsOptions;

declare interface ITheme extends Omit<Theme, "palette" | "breakpoints"> {
  palette: IPalette;
  breakpoints: Breakpoints;
}

declare interface IThemeOptions
  extends Omit<ThemeOptions, "palette" | "breakpoints"> {
  palette: IPalette;
  breakpoints: BreakpointsOptions;
}

declare interface IPalette {
  mode: "light" | "dark";
  primary: DefaultPalette;
  secondary: DefaultPalette;
  neutral: DefaultPalette;
  accent: DefaultPalette;
  error: DefaultPalette;
  info: DefaultPalette;
  warning: DefaultPalette;
  text: {
    primary: string;
    secondary: string;
  };
  common: {
    //TODO
    black: string;
    white: string;
  };
  background: {
    default: string;
    paper: string;
  };
}

interface PaletteColorOptions extends SimplePaletteColorOptions {
  A100?: string;
  A200?: string;
  A400?: string;
  A700?: string;
  A800?: string;
}

declare type DefaultPalette = PaletteColorOptions &
  Omit<Color, "A100" | "A200" | "A400" | "A700" | "A800">;
