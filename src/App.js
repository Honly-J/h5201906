import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Load from './views/load';
import start from './views/start';
import './statics/css/reset.scss';

class App extends Component {
  // constructor(...args) {
  //   super(...args);
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path='/' component={Load}></Route>
              <Route path='/start' component={start}></Route>   
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;