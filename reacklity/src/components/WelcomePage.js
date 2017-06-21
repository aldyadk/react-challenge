import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { tambahAction } from '../actions';

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.pengguna ? `Hey ${this.props.pengguna}, ` : ''}Welcome to the SW Character Page!</h5>
        <input style={{width:'40%'}} type="text" placeholder="your name here"/>
        <button onClick={()=>{}}>Submit</button>
        <br/>
        <Link to="/chars">
          <img alt="legotroopimage" src="http://images.shoutwiki.com/lego/thumb/6/67/Stormtrooper-75060.png/250px-Stormtrooper-75060.png" />
          <h5 style={{color:'black'}}>Click on me to Enter!</h5>
          <h5 style={{color:'red'}}>Now! Or I'll shoot!</h5>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    judul: state.title,
    pengguna: state.user
  };
}


export default connect(mapStateToProps, null)(WelcomePage)