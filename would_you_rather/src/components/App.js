import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Leaderboard from '../components/Leaderboard'
import CreatePoll from './CreatePoll'
import VotePoll from '../components/VotePoll'
import Navigationbar from './Navigationbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserRoute from './UserRoute'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Navigationbar />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Login} />
                <UserRoute path="/home" component={Dashboard} />
                <UserRoute
                  path="/question/:question_id"
                  component={VotePoll}
                />
                <UserRoute path="/add" component={CreatePoll} />
                <UserRoute path="/leaderboard" component={Leaderboard} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar > 0
  }
}

export default connect(mapStateToProps)(App)
