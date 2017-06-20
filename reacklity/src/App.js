import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import DataTable from './components/DataTable'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Star Wars Char',
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://swapi.co/api/people/')
    .then(result=>{
      var data = result.data.results
      this.setState({
        data:data
      })
    })
    // .catch(err=>{
    //   this.setState({
    //     data:err
    //   })
    // })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{this.state.title}</h2>
          </div>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/chars" component={(props)=> <DataTable data={this.state.data} {...props}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
