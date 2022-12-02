import type { Components as MuiComponents, Theme } from '@mui/material'
import { fontFaces } from './fontFace'
import lightPalette from './lightPalette'
import darkPalette from './darkPalette'

const components: MuiComponents<Theme> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: 48,
        paddingInlineEnd: 14,
        paddingInlineStart: 14,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        top: -2,
      },
      sizeSmall: {
        top: 3,
      },
      shrink: {
        top: 0,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        ':disabled': {
          ':hover': {
            backgroundColor: 'currentColor',
          },
        },
      },
      sizeSmall: {
        height: 36,
        paddingInline: '20px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 400,
        boxShadow: 'none',
        textTransform: 'none',
        ':hover': {
          boxShadow: 'none',
        },
      },
      sizeMedium: {
        height: 44,
        paddingInline: '24px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: 400,
        boxShadow: 'none',
        textTransform: 'none',
        ':hover': {
          boxShadow: 'none',
        },
      },
      sizeLarge: {
        height: 48,
        paddingInline: '28px',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 400,
        boxShadow: 'none',
        textTransform: 'none',
        ':hover': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        backgroundColor: lightPalette.primary.main,
        color: lightPalette.neutral[50],
        ':hover': {
          backgroundColor: lightPalette.primary[700],
        },
      },
      containedSecondary: {
        backgroundColor: lightPalette.secondary.main,
        color: lightPalette.neutral[50],
        ':hover': {
          backgroundColor: lightPalette.secondary[700],
        },
      },
      outlinedPrimary: {
        borderColor: lightPalette.primary.main,
        color: lightPalette.primary.main,
        ':hover': {
          backgroundColor: lightPalette.primary.main,
          color: lightPalette.neutral[50],
        },
      },
      outlinedSecondary: {
        borderColor: lightPalette.secondary.main,
        color: lightPalette.secondary.main,
        ':hover': {
          backgroundColor: lightPalette.secondary.main,
          color: lightPalette.neutral[50],
        },
      },
      textPrimary: {
        color: lightPalette.primary.main,
        ':hover': {
          color: lightPalette.primary[700],
          backgroundColor: 'transparent',
        },
      },
      textSecondary: {
        color: lightPalette.secondary.main,
        ':hover': {
          color: lightPalette.secondary[700],
          backgroundColor: 'transparent',
        },
      },
    },
    variants: [
      {
        props: { variant: 'text', fullWidth: false },
        style: {
          paddingInline: 0,
          marginInline: '20px',
          width: 'auto !important',
          minWidth: 'auto !important',
        },
      },
      {
        props: { variant: 'text', fullWidth: true },
        style: {
          paddingInline: '20px',
          marginInline: 0,
        },
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontSize: 16,
        boxShadow: 'unset',
        borderRadius: 8,
      },
      sizeSmall: {
        height: 25,
      },
      sizeMedium: {
        height: 36,
      },
      sizeLarge: {
        height: 45,
      },
    },
  },

  MuiCssBaseline: {
    styleOverrides: {
      '@fontFace': fontFaces,
      html: {
        margin: 0,
      },
      body: {
        margin: 0,
        overflowX: 'hidden',
      },

      '*': {
        fontFamily: '"Nunito", "IRANSans"',
      },
      a: {
        textDecoration: 'none',
        color: '#eb8920',
      },
    },
  },
}

export default components
