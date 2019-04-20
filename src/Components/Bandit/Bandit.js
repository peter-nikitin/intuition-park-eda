import React, { Component } from "react";
import "./bandit.scss";
import Spinner from "../Spinner/Spinner";
import Cards from "../Cards/Cards";
import recipe from "../../data/recipes";

import RecipeCard from "../Recipe/Recipe";


class Bandit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: Array(3).fill(0),
      showCards: false,
      choosenRecipes: [recipe[0], recipe[0], recipe[0]],
      showMoreBtn: false,
      cardAnimation: "append"
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showRecipe = this.showRecipe.bind(this)
    }

  updateTheRecipe() {
    this.setState({
      choosenRecipes: [
        recipe[`${Bandit.matches[0]}`],
        recipe[`${Bandit.matches[1]}`],
        recipe[`${Bandit.matches[2]}`]
      ]
    });
    this.showCards();
  }
  showCards() {
    this.setState({
      showCards: true,
      showMoreBtn: true,
      cardAnimation: "append"
    });
  }

  handleClick() {
    this.setState({ cardAnimation: "hide" });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static matches = [];

  finishHandler(value) {
    Bandit.matches.push(value);

    if (Bandit.matches.length === 3) {
      this.updateTheRecipe();
      console.log(Bandit.matches);
    }
  }

  emptyArray() {
    Bandit.matches = [];
  }

  showRecipe(recipe) {
    this.setState({
      showRecipe: !this.state.showRecipe,
      recipeToOpen: recipe,
      recipeAnimation: "append"
    });
  }

  hideRecipe() {
    setTimeout(() => {
      this.setState({
        showRecipe: !this.state.showRecipe
      });
    }, 1000);
    this.setState({
      recipeAnimation: "hide"
    });
  }

  render() {
    const { showCards } = this.state;
    // console.log(this.state.cardAnimation);
    return (
      <div className="bandit">
        <div className="bandit__display">
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child1 = child;
            }}
            timer="2000"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child2 = child;
            }}
            timer="2200"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child3 = child;
            }}
            timer="2200"
          />
        </div>

        {/* show cards after spining the bandit */}
        {showCards && (
          <Cards
            animation={this.state.cardAnimation}
            choosenRecipes={this.state.choosenRecipes}
            onClick={recipe => this.showRecipe(recipe)}
          />
        )}

        {/* bandit button  */}
        {this.state.showMoreBtn ? (
          <button
            onClick={this.handleClick}
            className="bandit__button bandit__button_more"
          >
            Подобрать меню
          </button>
        ) : (
          <button onClick={this.handleClick} className="bandit__button ">
            Подобрать меню
          </button>
        )}

        {this.state.showRecipe && (
          <RecipeCard
            recipeToOpen={this.state.recipeToOpen}
            hideRecipeCard={() => this.hideRecipe()}
            animation={this.state.recipeAnimation}
          />
        )}
      </div>
    );
  }
}

export default Bandit;
