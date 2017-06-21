import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { dataLoad } from '../actions/';

class DataTable extends React.Component {
  render() {
    if(this.props.loggedUser){
      return (
        <div>
          <h3>List of Character:</h3>
          <table className="striped highlight bordered">
            <thead>
              <tr className="blue-grey darken-2" style={{color:'white'}}>
                <th>No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Eye Color</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
            {this.props.data.map((datum,index)=>{ return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{datum.name}</td>
                <td>{datum.gender}</td>
                <td>{datum.height}</td>
                <td>{datum.eye_color}</td>
                <td><Link to={`/chars/${index+1}`}><i className="material-icons">call_made</i></Link></td>
              </tr>
            )
            })}
            </tbody>
          </table>
        </div>
      );
    }
    return (<h1>You are not authorized!!!</h1>)
  }

  componentDidMount(){
    axios.get('http://swapi.co/api/people/')
    .then(result=>{
      var data = result.data.results
      this.props.loadData(data)
    })
    // .catch(err=>{
    //   this.setState({
    //     data:err
    //   })
    // })
  }
}

const mapStateToProps = (state) => {
  return {
    pengguna: state.user,
    loggedUser: state.loggedUser,
    data: state.data
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (data) => dispatch(dataLoad(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DataTable)