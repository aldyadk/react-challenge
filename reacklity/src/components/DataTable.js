import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { dataLoad } from '../actions/';

class DataTable extends React.Component {
  constructor(){
    super()
    this.state={
      status:''
    }
  }
  render() {
    if(this.props.loggedUser){
      if(this.state.status){
        return (
          <div>
            <h5>List of Targets:</h5>
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
      } return (
        <div>
          <br />
          <h5>Loading: Don't kill the browser, or I'll kill you!</h5>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (<h1>You are not authorized!!!</h1>)
  }

  componentDidMount(){
    if(this.props.loggedUser){
      axios.get('http://swapi.co/api/people/')
      .then(result=>{
        var data = result.data.results
        this.props.loadData(data)
        setTimeout(()=>
        this.setState({
          status: 'aktif'
        })
        ,1000)
      })
    }
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