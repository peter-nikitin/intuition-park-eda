import React, { Component } from 'react';
import './spinner.scss';

export default class Spinner extends Component {
    render() {
        console.log(this.props.recipe);
        const position = this.props.backGroundPosition;
        return (
          <div
            className="bandit__spinner spinner"
            style={{ backgroundPosition: "0px " + position + "px" }}
          >
            {/* <img
              className="spinner__image"
              src={this.props.recipe.image}
              alt={this.props.recipe.name}
            /> */}
          </div>
        );
    }
}