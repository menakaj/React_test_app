import React, { Component } from 'react';
// import img from "../../public"

class MobileApp extends Component {


    render() {
        var imge = "../../public/images" + this.props.app.platform;
        return (
            <tr>
                <td>{this.props.app.name}</td>
                <td>{this.props.app.version}</td>
                <td><img src={imge}/></td>
                <td>{this.props.app.state}</td>
            </tr>);
        //

    }
}

export default MobileApp;