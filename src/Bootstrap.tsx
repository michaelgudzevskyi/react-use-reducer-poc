import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/globalStyle'
import Routes from './routes'

const Bootstrap: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default Bootstrap
