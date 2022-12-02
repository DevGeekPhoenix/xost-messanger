import { EmotionCache } from '@emotion/cache'
import type { ReactNode } from 'react'

export interface ThemeProviderProps {
  children: ReactNode
  emotionCache?: EmotionCache
}
