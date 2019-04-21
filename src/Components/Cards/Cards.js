
import React, { Component } from 'react'
import "./cards.scss";
import { Object } from 'core-js';

export default class Cards extends Component {

  

  render() {
    const recipe = this.props.choosenRecipes
    const animation = this.props.animation
    // console.log(this.props.animation);
    return (
        <div className={"bandit__cards card "}>
            {Object.keys(recipe).map((item, i) => {
              let card = "";

              if (recipe[item] !== undefined) {
                card = (
                  <div
                    key={i}
                    className={"card__item " + animation}
                    onClick={() =>
                      this.props.onClick(recipe[item])
                    }
                  >
                    <img
                      src={recipe[item].image}
                      alt={recipe[item].name}
                      className="card__image"
                    />
                    <div className="card__name">
                      <span>{recipe[item].name}</span>
                    </div>
                    {/* <p>{recipe[item].description}</p> */}
                  </div>
                );
              }
              return card;
            })}
        </div>
    );
  }
}
