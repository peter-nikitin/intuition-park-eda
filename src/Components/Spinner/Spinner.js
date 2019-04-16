import React, { Component } from 'react';
import './spinner.scss';

export default class Spinner extends Component {
    render() {
        const position = this.props.backGroundPosition;
        const recipeType = this.props.recipeType || '';
        return (
          <div
            className={
              "bandit__spinner spinner spinner__" + recipeType
            }
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