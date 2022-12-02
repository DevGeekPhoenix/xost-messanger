const primary: DefaultPalette = {
  get main() {
    return this[900];
  },
  get light() {
    return this[800];
  },

  50: "#808080",
  100: "#748E8C",
  200: "#689C98",
  300: "#5CAAA4",
  400: "#50B8B0",
  500: "#44C7BC",
  600: "#38D5C8",
  700: "#2CE3D4",
  800: "#20F1E0",
  900: "#14FFEC",
};

const secondary: DefaultPalette = {
  get main() {
    return this[900];
  },

  50: "#FFFFFF",
  100: "#D9FAFB",
  200: "#B4F4F7",
  300: "#8EEFF2",
  400: "#68EAEE",
  500: "#42E4EA",
  600: "#1DDFE6",
  700: "#16BDC3",
  800: "#11989D",
  900: "#0D7377",
};

const neutral: DefaultPalette = {
  get main() {
    return this[50];
  },
  50: "#212121",
  100: "#3A3A3A",
  200: "#525252",
  300: "#6B6B6B",
  400: "#848484",
  500: "#9C9C9C",
  600: "#B5B5B5",
  700: "#CECECE",
  800: "#E6E6E6",
  900: "#FFFFFF",
};

const accent: DefaultPalette = {
  get main() {
    return this[900];
  },
  50: "#E3F6EE",
  100: "#BBE8D5",
  200: "#D6FFF1",
  300: "#ACFFE3",
  400: "#83FFD5",
  500: "#5AFFC8",
  600: "#30FFBA",
  700: "#07FFAC",
  800: "#00DC93",
  900: "#00B377",
};

const error: DefaultPalette = {
  get main() {
    return this[500];
  },
  get light() {
    return this[900];
  },

  50: "#FCEAEC",
  100: "#FFE8E8" /*bg color */,
  200: "#E39695",
  300: "#D46F6D",
  400: "#FA6959",
  500: "#F24937" /*Red */,
  600: "#CF3930",
  700: "#BD312A",
  800: "#B02A24",
  900: "#8C1F1F" /*hover*/,
};

const warning: DefaultPalette = {
  get main() {
    return this[800];
  },
  get light() {
    return this[800];
  },

  50: "#FCFCE6",
  100: "#FEFADC" /*bg color*/,
  200: "#F8F7C1",
  300: "#F4F198",
  400: "#F0EB6F",
  500: "#EDE74E",
  600: "#EAE22B",
  700: "#EBD125",
  800: "#F0DC28" /*main*/,
  900: "#BBAC25" /*hover*/,
};

const info: DefaultPalette = {
  get main() {
    return this[900];
  },
  get light() {
    return this[50];
  },
  50: "#EBEEFF" /* bg color */,
  100: "#BCC5D3",
  200: "#929FB5",
  300: "#6A7B97",
  400: "#4B6083",
  500: "#2B4772",
  600: "#25406A",
  700: "#1D3760",
  800: "#172E53",
  900: "#0023DD" /*main */,
};

const palette: IPalette = {
  mode: "dark",
  primary,
  secondary,
  error,
  info,
  neutral,
  warning,
  accent,
  text: {
    primary: neutral[900],
    secondary: neutral[300],
  },
  common: {
    black: "#1C1B1B",
    white: "#FFFFFF",
  },
  background: {
    default: neutral[100],
    paper: neutral[100],
  },
};

export default palette;
