import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userSubmit } from '../actions';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
            </ul>
          </div>
        </nav>
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