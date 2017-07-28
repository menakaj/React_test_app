import React, { Component } from 'react';
import App from './App';

class AppList extends Component {
    render() {
        console.log(this.props);
        let apps;
        if (this.props) {
            apps = this.props.apps.map(app => {
                return (<App key={app.name} app={app}/>)
            });
        }
        return <div>
            List of Apps.
            {apps}
        </div>;
    }
}

export default AppList;