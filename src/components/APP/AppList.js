import React, { Component } from 'react';
import MobileApp from './MobileApp';

class AppList extends Component {

    constructor() {
        super();
        // this.apps = this.getApps();
    }

    render() {
        console.log(this.props.apps);
        let apps;
        if (this.props.apps) {
            apps = this.props.apps.map(app => {
                return (<MobileApp key={app.name} app={app}/>)
            });
        } else {

        }
        return <div >
            <table>
                <thead>
            <tr>
                <th>App Name</th>
                <th>App Version</th>
                <th>App Platform</th>
                <th>App Status</th>
            </tr>
                </thead>
            <tbody>
            {apps}
            </tbody>
        </table>
        </div>;
    }
}

export default AppList;