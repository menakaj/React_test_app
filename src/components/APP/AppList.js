import React, { Component } from 'react';
import MobileApp from './MobileApp';

class AppList extends Component {

    constructor() {
        super();
        this.apps = this.getApps();
    }

    getApps(){
        return [
            {name: "App1", version:"v1.0", platform: "android.jpg", state:"Published"},
            {name: "App2", version:"v1.1", platform: "apple.jpg", state:"InReview"}
        ]
    }

    render() {
        console.log(this.apps);
        let apps;
        if (this.props) {
            apps = this.apps.map(app => {
                return (<MobileApp key={app.name} app={app}/>)
            });
        } else {

        }
        return <div>
            List of Apps.
            {apps}
        </div>;
    }
}

export default AppList;