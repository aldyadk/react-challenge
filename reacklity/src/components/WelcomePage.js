import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userEdit, userSubmit } from '../actions';

class WelcomePage extends React.Component {
  render() {
    if(!this.props.loggedUser){
      return (
        <div>
          <h5>{this.props.pengguna ? `Hey ${this.props.pengguna}, ` : ''}Welcome to The Empire killing list!</h5>
          <input
            onChange={(event) => this.props.editUser(event.target.value)}
            style={{width:'25%',textAlign:'center'}}
            type="text"
            value={this.props.pengguna}
            placeholder="your name here"
          />
          <button
            onClick={
              ()=>{
                this.props.submitUser(this.props.pengguna)
                this.props.editUser('')
              }
            }
          >Submit
          </button>
        </div>
      );
    }
    return (
      <Link to="/chars">
        <h5 style={{color:'black'}}>Click on me to see our target!</h5>
        <img alt="legotroopimage" height="200" src="http://images.shoutwiki.com/lego/thumb/6/67/Stormtrooper-75060.png/250px-Stormtrooper-75060.png" />
        <h5 style={{color:'red'}}>Now! Or I'll shoot you instead!</h5>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pengguna: state.user,
    loggedUser: state.loggedUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user) => dispatch(userEdit(user)),
    submitUser: (user) => dispatch(userSubmit(user)),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(WelcomePage)