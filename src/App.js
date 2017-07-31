import React, { Component } from 'react';
import CreateApplication from './components/APP/create/CreateApplication'
import  {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom'
import AppList from "./components/APP/AppList";
import apple from "./public/images/apple.jpg";
import android from "./public/images/android.jpg";
import Login from "./components/User/Login"

class App extends Component {

    constructor() {
        super();
        this.state = {
            apps: []
        };
        this.user = "Menaka";
    }

    componentWillMount() {
        //Call the backend api and get the existing apps.
        this.setState({apps : [
            {name: "App1", version:"v1.0", platform: "android.jpg", state:"Published"},
            {name: "App2", version:"v1.1", platform: "android.jpg", state:"InReview"}
            ]
        });
    }

    getUser() {
        return this.user;
    }

  render() {

        const applist = this.checkAppsPresent();
        this.checkUser();

        if (this.getUser()) {
            return <div>
                App Publisher!
                <Router>
                    <div>
                        <div>Login</div>
                        <div>Register</div>
                        <Switch>
                            <Route exact path="/" render={
                                ()=>(
                                    <div>
                                        <ul>
                                            <li>
                                                <Link to="app/create">CreateAPP</Link>
                                            </li>

                                        </ul>
                                        {applist}
                                    </div>)
                            }
                            />
                            {/*checkAppsPresent();*/}
                            <Redirect exact from="/" to="/app/create" />
                            <Route path="/app/create" component={CreateApplication}/>
                            <Route path="/apps" render={props => (<AppList apps={this.state.apps}/>)}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        }

      return <div>
          User not logged in.
          <div>
              <Login />
          </div>

      </div>;

  }

  checkAppsPresent() {
        if (this.state.apps) {
            return <AppList apps={this.state.apps} />
        } else {
            return ("No apps");
        }
  }

  checkUser() {
        console.log(this.user);
        if (this.user) {

        }
  }
}



export default App;
