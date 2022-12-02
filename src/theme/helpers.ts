import { CreateMUIStyled, styled as MuiStyled } from '@mui/material'
import ThemeConstants from './constants'

const { htmlFontSize } = ThemeConstants

export const pxToRem = (px: number, baseFontSize: number = htmlFontSize) =>
  `${(px / baseFontSize).toFixed(3)}rem`

export const calculateColumnSize = (
  width: number,
  gutter: number,
  margin = gutter,
) => {
  const containerWidth = width - 2 * margin
  const colWidth = (containerWidth - 11 * gutter) / 12
  return colWidth
}


export const styled: CreateMUIStyled<ITheme & Theme> = (component: any, options: any) => MuiStyled(component, options) as unknown as any
