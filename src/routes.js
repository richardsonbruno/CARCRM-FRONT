import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Circular = () => (
  <div className='d-flex justify-content-center align-items-center'>
    <CircularProgress />
  </div>
);

const Routes = () => (
  <Router>
    <Suspense fallback={<Circular />}>
      <Switch>
        <Route path='/' exact component={() => (<h1>Home</h1>)} />
      </Switch>
    </Suspense>
  </Router>
)
export default Routes;