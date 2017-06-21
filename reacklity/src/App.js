import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/config'
import WelcomePage from './components/WelcomePage'
import Page404 from './components/Page404'
import DataTable from './components/DataTable'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: store.getState().title,
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
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <Link to="/"><img alt="legotroopimage" src='https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-128.png' /></Link>
              <h2>{this.state.title}</h2>
            </div>
            <Switch>
              <Route exact path="/" component={WelcomePage}/>
              <Route exact path="/chars" component={(props)=> <DataTable data={this.state.data} {...props}/>} />
              <Route component={Page404} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
