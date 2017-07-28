import React, { Component } from 'react';
import CreateApplication from './components/create/CreateApplication'
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import AppList from "./components/create/AppList";

class App extends Component {

    constructor() {
        super();
        this.apps = [{name: "App1", state:"Published"}, {name: "App2", state:"InReview"}];
    }

  render() {
      return <div>
          App Publisher!
          <Router>
              <div>
                  <Switch>
                      <Route exact path="/" render={()=>(
                          <ul>
                              <li>
                                  <Link to="app/create">CreateAPP</Link>
                              </li>
                              <li>
                                  <Link to="apps">View Apps.</Link>
                              </li>
                          </ul>)}/>
                      <Route path="/app/create" component={CreateApplication}/>
                      <Route path="/apps" render={props => (<AppList apps={this.apps}/>)}/>
                  </Switch>
              </div>
          </Router>
      </div>
  }
}

export default App;
