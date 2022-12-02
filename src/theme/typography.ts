import { FontStyleOptions, TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography'
import ThemeConstants from './constants'
import { pxToRem } from './helpers'
import type { Variant } from '@mui/material/styles/createTypography'

// Add Typography Custom variant  ;
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
  }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  body3: React.CSSProperties
}

const { htmlFontSize, fontFamily, fontSize, fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } =
  ThemeConstants

const typography: ExtendedTypographyOptions = {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
  h1: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(40),
    lineHeight: '48px',
   
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(30),
    //   lineHeight: '40px',
    // },
    // '@media (max-width:1280px)': {
    //   fontSize: pxToRem(24),
    //   lineHeight: '34px',
    // },
    // '@media (max-width:960px)': {
    //   fontSize: pxToRem(20),
    //   lineHeight: '30px',
    // },
  },
  h2: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(28),
    lineHeight: '36px',
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(18),
    //   lineHeight: '26px',
    // },
    // '@media (max-width:1280px)': {
    //   fontSize: pxToRem(16),
    //   lineHeight: '24px',
    // },
    // '@media (max-width:960px)': {
    //   fontSize: pxToRem(14),
    //   lineHeight: '20px',
    // },
  },
  h3: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(24),
    lineHeight: '32px',
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(20),
    //   lineHeight: '30px',
    // },
  },
  h4: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(16),
    lineHeight: '23px',
  },
  h5: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(20),
    lineHeight: '23px',
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(18),
    //   lineHeight: '26px',
    // },
  },
  h6: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(16),
    lineHeight: '23px',
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(18),
    //   lineHeight: '26px',
    // },
  },

  body1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(14),
    lineHeight: '20px',
  },
  body2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(12),
    lineHeight: '16px',
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(14),
    //   lineHeight: '20px',
    // },
  },

  body3: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(16),
    lineHeight: '23px',
  },
  subtitle1: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(20),
    lineHeight: '28px',
  },
  subtitle2: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(14),
    lineHeight: '20px',
  },
  button: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(16),
    lineHeight: '20px',
    textAlign: 'center',
  },
  caption: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(10),
    lineHeight: '20px',
    // '@media (max-width:1600px)': {
    //   fontSize: pxToRem(12),
    //   lineHeight: '20px',
    // },
  },
  overline: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(16),
    lineHeight: '23px',
  },
}

export default typography as ExtendedTypographyOptions
