import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import DashBoardpage from './pages/dashboard/DashBoard'

function AppRoutingFinal() {
  // TODO change to value from sessionStorage
  let loggerIn = true
  
  
  return (
    <div>
      <Router>
        {/* Route Switch */}
        <Switch>
          {/* Redirections to protect our routes */}
          <Route exact path='/'>
            {
              loggerIn ? 
                (<Redirect from='/' to='/dashboard' />)
                : 
                (<Redirect from='/' to='/login' />)
            }
          </Route>
          {/* Login Router */}
          <Route exact path='/login' component={LoginPage} />
          {/* Dashboard Route */}
          <Route exact path='/dashboard'>
            {
              loggerIn ? 
                (<DashBoardpage />)
                : 
                (<Redirect from='/' to='/login' />)
            }
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default AppRoutingFinal