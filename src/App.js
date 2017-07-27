import React, { Component } from 'react';
import CreateApplication from './components/create/CreateApplication'
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

class App extends Component {
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
                          </ul>)}/>
                      <Route path="/app/create" component={CreateApplication}/>
                  </Switch>
              </div>
          </Router>
      </div>
  }
}

export default App;
