import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
                 <div className="bandit__spinner">{this.props.recipe}</div>
        );
    }
}
 
export default Spinner;