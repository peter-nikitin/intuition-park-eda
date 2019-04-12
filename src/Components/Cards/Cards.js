
import React, { Component } from 'react'
import "./cards.scss";
import { Object } from 'core-js';
import RecipeCard from "../Recipe/Recipe";

export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.hideRecipeCard = this.hideRecipeCard.bind(this);
    this.state = {
      showRecipeCard: false,
      recipeToOpen: {},
      
    };
  }

  showRecipeCard(recipe) {
    this.setState({
      showRecipeCard: !this.state.showRecipeCard,
      recipeToOpen: recipe
    });
  }
  
  hideRecipeCard() {
    this.setState({
      showRecipeCard: !this.state.showRecipeCard
    });
  }

  render() {
    const recipe = this.props.choosenRecipes
    return (
      <div>
        <div className="bandit__cards card">
          {Object.keys(recipe).map((item, i) => {
            console.log(item);
            return (
              <div
                key={i}
                className="card__item"
                onClick={() => this.showRecipeCard(recipe[item])}
              >
                <img
                  src={recipe[item].image}
                  alt={recipe[item].name}
                  className="card__image"
                />
                <div className="card__name">{recipe[item].name}</div>
                <p>{recipe[item].description}</p>
              </div>
            );
          })}
        </div>
        {/* {console.log(this.state.recipeToOpen)} */}
        {this.state.showRecipeCard && (
          <RecipeCard
            recipeToOpen={this.state.recipeToOpen}
            hideRecipeCard={this.hideRecipeCard}
          />
        )}
      </div>
    );
  }
}
