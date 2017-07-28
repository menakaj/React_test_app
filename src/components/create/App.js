import React, { Component } from 'react';

class App extends Component {
    render() {
        return (<ul className="Apps">
            <li>Name: {this.props.app.name} State: {this.props.app.state}</li>

        </ul>);
    }
}

export default App;