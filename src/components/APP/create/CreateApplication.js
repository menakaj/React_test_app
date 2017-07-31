import React, { Component } from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class CreateApplication extends Component {

    constructor(props) {
        super(props);
        this.platforms = ["Android", "iOS", "WebApp"];
        this.state = {
            uploadFile: {
                title: "Upload .apk file.",
                element: <input type="file"/>
            }
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted");

    }

    change(e) {
        console.log(e.target.value);
        var platform = e.target.value;

        if (platform === 'Android') {
            this.setState({uploadFile:{title: "Upload .apk file", element:<input type="file"/>}})
        } else if (platform === 'iOS') {
            this.setState({uploadFile:{title: "Upload .ipa file", element:<input type="file"/>}})
        } else {
            this.setState({uploadFile:{title: "Enter web clip address", element:<input type="text"/>}})
        }
        //this.setState({plat: e.platform})
    }

    render() {

        let platformOption = this.platforms.map(platform => {return <option key={platform} value={platform}>{platform}</option>});

        console.log("IN Create application");
        return (
                <div>
                    <Router>
                        <Switch>
                            <Route path="/app/create" render={
                                () => (
                                    <div>
                                        <span>Step 1</span>
                                        <form onSubmit={this.handleSubmit}>
                                            <label>Platform: </label><select onChange={this.change.bind(this)} ref="platform">{platformOption}</select><br/>
                                            <div>
                                            <label>{this.state.uploadFile.title}</label>
                                                {this.state.uploadFile.element}
                                        </div>
                                            <input type="submit" value="Next >" />
                                        </form>
                                    </div>
                                )}/>
                        </Switch>
                    </Router>
                </div>
       );
    }
}


export default CreateApplication;