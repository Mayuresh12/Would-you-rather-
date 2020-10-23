import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/new-question.css'
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class CreatePoll extends Component {
  state = {
    redirectHome: false,
    optionOneText: '',
    optionTwoText: ''
  }

  noticeChange = e => {
    const text = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: text
    }))
  }

  createQuestion = e => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props

    dispatch(
      handleSaveQuestion({ optionOneText, optionTwoText, authedUser })
    ).then(() =>
      this.setState(() => ({
        redirectHome: true
      }))
    )
  }

  render() {
    const { redirectHome, optionOneText, optionTwoText } = this.state
    const dontPost = optionOneText === '' ? true : optionTwoText === ''

    if (redirectHome) {
      return <Redirect to={`/home`} />
    }

    return (
      <div>
        <div className="vote-container wyr-form">
          <h1 className="newPollheader">Create a New Poll</h1>
          <h2 className="container">Would you rather...!</h2>
          <form onSubmit={this.createQuestion}>
            <input
              placeholder="Enter option 1..."
              onChange={this.noticeChange}
              value={optionOneText}
              name="optionOneText"
            />
            <input
              placeholder="Enter option 2..."
              onChange={this.noticeChange}
              value={optionTwoText}
              name="optionTwoText"
            />
            <button className="submit-button" type="submit" disabled={dontPost}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(CreatePoll)
