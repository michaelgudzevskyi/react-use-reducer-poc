import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage } from '../pages'

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
)

export default Routes
