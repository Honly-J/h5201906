import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Load from './views/load';
import start from './views/start';
import './statics/css/reset.scss';
import '../statics/css/animate'

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
              <Route path='/load' component={Load}></Route>
              <Route path='/start' component={start}></Route>   
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;