import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import store from './store/config'
import AppHeader from './components/AppHeader'
import WelcomePage from './components/WelcomePage'
import Page404 from './components/Page404'
import DataTable from './components/DataTable'
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route component={AppHeader} />
            <Switch>
              <Route exact path="/" component={WelcomePage}/>
              {/*<Route exact path="/chars" component={(props)=> <DataTable data={this.state.data} {...props}/>} /> */}
              <Route component={DataTable} />
              <Route component={Page404} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
