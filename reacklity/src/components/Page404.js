import React from 'react'
import { Link } from 'react-router-dom'

class Page404 extends React.Component {
  render() {
    return (
      <div>
        <h1>Sorry, page not found (yet)!</h1>
        <Link to="/chars"><button style={{padding:10,backgroundColor:'#025A6F',color:'white'}}>Back to chars page!</button></Link>
      </div>
    );
  }
}


export default Page404