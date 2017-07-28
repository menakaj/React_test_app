import React, { Component } from 'react';
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

class Step2 extends Component {
    render() {
        console.log("IN step 2");
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/app/next" render={() => (
                            <div><span>Step2</span>
                                <ul>
                                    <li>Name</li>
                                    <li>Description</li>
                                    <li>Version</li>
                                    <li>Visibility</li>
                                    <li>Images</li>
                                    <li>Icon</li>
                                    <li>Create app</li>
                                </ul>
                            </div>
                        )}/>

                    </Switch>
                </Router>
            </div>);
    }
}

class CreateApplication extends Component {
    render() {
        console.log("IN Create application");
        return (
                <div>
                    <Router>
                        <Switch>
                            <Route path="/app/create" render={
                                () => (
                                    <div>
                                        <span>Step 1</span>

                                        <ul>
                                            <li>Platforms</li>
                                            <li>Upload file.</li>
                                            <li><Link to="/app/next">Next</Link></li>
                                        </ul>
                                    </div>
                                )}/>
                            <Route path="/app/next" component={Step2}/>

                        </Switch>
                    </Router>
                </div>
       );
    }
}


export default CreateApplication;