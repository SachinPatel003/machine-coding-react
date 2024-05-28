import React from 'react';
import { HashRouter, Switch } from 'react-router-dom'

const withRouter = (WrappedComponent) => (props) => (
  <HashRouter>
    <Switch>
      <WrappedComponent {...props} />
    </Switch>
  </HashRouter>
)

export default withRouter;
