import React, { Component } from 'react';
// import img from "../../public"

class MobileApp extends Component {


    render() {
        var imge = "../../public/images" + this.props.app.platform;
        return (<ul className="Apps">
            {/*Handle on click on list items.*/}
            <li>
                <div>
                    <label>Name:</label> <a href="https://wso2.com">{this.props.app.name}</a>
                </div>
                    Version: {this.props.app.version} Platform: <img height="50px" width="50px" src={imge}/>
                    State: {this.props.app.state}

                </li>

        </ul>);
    }
}

export default MobileApp;