import type { ReactNode } from 'react'
import type {
  MissingTranslationError,
  MessageFormatError,
  MissingDataError,
  InvalidConfigError,
  UnsupportedFormatterError,
  FormatError,
} from 'react-intl'

import { SeoLanguages } from '@public/SeoObjects'

interface JSONObject {
  [x: string]: string
}

export interface LanguageProviderProps {
  children: ReactNode
  intlMessages: JSONObject
}

export type IError =
  | MissingTranslationError
  | MessageFormatError
  | MissingDataError
  | InvalidConfigError
  | UnsupportedFormatterError
  | FormatError
