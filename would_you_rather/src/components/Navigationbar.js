import React, { Component } from 'react'
import '../css/navigationbar.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navigationbar extends Component {
  render() {
    const { user, authedUser } = this.props
    return (
      <div className="nav-container">
        <div className="inner-container">
          <h1 className="nav-brand" >Would You Rather!</h1>
          {authedUser ? (
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home">
                  <button className="nav-button-style">Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add">
                  <button className="nav-button-style">New Poll</button>
                </Link>
              </li>
              <li className="nav-item split">
                <Link to="/leaderboard">
                  <button className="nav-button-style">Leaderboard</button>
                </Link>
              </li>

              <li className="nav-item">
                <img
                  src={user.avatarURL}
                  alt={`Avatar of ${user.avatarURL}`}
                  className="nav-bar-logged-user"
                />
                {user ? " " + user.name : null}</li>
              <li className="nav-item">
                <Link to="/">
                  <button className="log-out-button">Log Out</button>
                </Link>
              </li>
            </ul>
          ) : (
              <ul className="nav-list">
                <li className="nav-item"></li>
              </ul>
            )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authedUser } = state
  const user = users[authedUser]
  return {
    user,
    authedUser
  }
}

export default connect(mapStateToProps)(Navigationbar)
