import React from 'react'
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the SW Character Page!</h1>
        <Link to="/chars"><button style={{padding:10,backgroundColor:'#025A6F'}}>Enter!</button></Link>
      </div>
    );
  }
}


export default WelcomePage