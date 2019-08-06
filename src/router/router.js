import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GlobalStore from '../data/store/globalStore';

/** Import logic components */
import { Dashboard, LogIn, SignUp } from '../data'
import PrivateRoute from './PrivateRoute';

/** Import view components */
import { Home, Page404 } from '../view';
import { Forgot } from '../view/Forgot';

/** @history : Maintains browsing history */
export const history = createBrowserHistory()

/** Main Router of the app*/
function Routes() {
  return (
    <Router history={history}>
      <GlobalStore>
        <Switch>
          <Route exact={true} path={'/'} render={Home} />
          <Route path={'/recuperar'} component={Forgot} />
          <Route path={'/inscribete'} component={SignUp} />
          <Route path={'/entra'} component={LogIn} />
          <PrivateRoute path={'/dashboard'} component={Dashboard} />
          <PrivateRoute path={'/dashboard/:userId'} component={Dashboard} />
          <Route path='*' component={Page404} />
        </Switch>
      </GlobalStore>
    </Router>
  )
}

export const links = [
  { label: "Dashboard API", path: '/home' }, 
  { label: "Buscar", path: '/searches' }
];

export default Routes
