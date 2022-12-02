import type { FC } from 'react'
import { store } from 'libs/store'
import { Provider } from 'react-redux'
import { StateManagerProviderProps } from './index.d'

const StateManagerProvider: FC<StateManagerProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default StateManagerProvider
