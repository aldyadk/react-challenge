import React, { Component } from 'react';
import axios from 'axios'

import DataTable from './components/DataTable'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Pokeapi - The Pokemon Api',
      // data: [{asd:'asd'},{qwe:'qwe'}]
      data: ['asd','qwe']
    }
  }

  componentDidMount(){
    axios.get('http://swapi.co/api/people/')
    // axios.get('http://pokeapi.co/api/v2/pokemon/')
    .then(result=>{
      var data = result.data.results
      // data = data.map(datum=>{
      //   return datum.name
      // })
      console.log(data);
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
        </div>
        <button onClick={this.getPoke}>Click Me!</button>
        <DataTable data={this.state.data}/>
      </div>
    );
  }
}

export default App;
