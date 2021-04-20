import { FC } from 'react'
import { ButtonStyle } from './styles'

export const Button: FC = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>
}
