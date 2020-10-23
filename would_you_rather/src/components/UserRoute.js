import React from 'react'
import { mockAuth } from '../utils/api'
import { Route, Redirect } from 'react-router-dom'

const UserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      mockAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
    }
  />
)

export default UserRoute
