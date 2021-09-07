import React, { Component } from 'react';
import Thingy from './Thingy';

class ThingsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.things.map(thingy => <Thingy thingy={thingy} />)}
            </div>
        )
    }
}

export default ThingsContainer;
