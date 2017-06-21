import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userSubmit } from '../actions';

class AppHeader extends React.Component {
  render() {
    if(!this.props.loggedUser){
      return (
        <div className="App-header">
          <Link to="/"><img alt="legotroopimage" src='https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-128.png' /></Link>
          <h2>{!this.props.loggedUser ? `${this.props.title}` : ''}</h2>
          <h5>{this.props.loggedUser ? `${this.props.title}` : ''}</h5>
          <h5>{this.props.loggedUser ? `Logged User: ${this.props.loggedUser}` : ''}</h5>
        </div>
      );
    } return (
      <div className="App-header">
        <Link to="/"><img alt="legotroopimage" src='https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-128.png' /></Link>
        <h2>{!this.props.loggedUser ? `${this.props.title}` : ''}</h2>
        <h5>{this.props.loggedUser ? `${this.props.title}` : ''}</h5>
        <h5>{this.props.loggedUser ? `Logged User: ${this.props.loggedUser}` : ''}</h5>
        <button
          style={{color:'teal'}}
          onClick={
            ()=>{
              this.props.submitUser('')
            }
          }
        >Log Out
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    loggedUser: state.loggedUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(userSubmit(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)