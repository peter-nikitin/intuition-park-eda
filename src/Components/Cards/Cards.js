
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
      recipeAnimation: 'hide'
    };
  }

  showRecipeCard(recipe) {
    this.setState({
      showRecipeCard: !this.state.showRecipeCard,
      recipeToOpen: recipe,
      recipeAnimation: "append"
    });
  }
  
  hideRecipeCard() {
    setTimeout(() => {
      this.setState({
        showRecipeCard: !this.state.showRecipeCard,
      });
    }, 1000 );
    this.setState({
      recipeAnimation: "hide"
    });
  }

  render() {
    const recipe = this.props.choosenRecipes
    const animation = this.props.animation
    console.log(this.props.animation);
    return (
      <div>
        <div className={"bandit__cards card "}>
            {Object.keys(recipe).map((item, i) => {
              let card = "";
              if (recipe[item] !== undefined) {
                card = (
                  <div
                    key={i}
                    className={"card__item " + animation}
                    onClick={() =>
                      this.showRecipeCard(recipe[item])
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
                    <p>{recipe[item].description}</p>
                  </div>
                );
              }
              return card;
            })}
        </div>
        {/* {console.log(this.state.recipeToOpen)} */}
        {this.state.showRecipeCard && (
          <RecipeCard
            recipeToOpen={this.state.recipeToOpen}
            hideRecipeCard={this.hideRecipeCard}
            animation = {this.state.recipeAnimation}
          />
        )}
      </div>
    );
  }
}
