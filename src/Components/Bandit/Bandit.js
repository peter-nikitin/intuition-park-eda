import React, { Component } from "react";
import "./bandit.scss";
import Spinner from "../Spinner/Spinner";
import Cards from "../Cards/Cards";
import recipe from "../../data/recipes";

class Bandit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe,
      spinner: Array(3).fill(0),
      showCards: false,
      choosenRecipes: {
        breakfast: recipe.breakfast[0],
        lunch: recipe.lunch[0],
        dinner: recipe.dinner[0]
      },
      showMoreBtn: false,
      slotHeight: 145,
      backGroundPosition: [0, 0, 0]
    };
  }

  spinTheWheel() {
    const random = Math.random() * 100;
    const number = Math.floor(random);
    return number;
  }

  choosTheRecipe(number) {
    let recipeNumber;

    if (number < 33) {
      recipeNumber = 0;
    } else if (number > 33 && number < 66) {
      recipeNumber = 1;
    } else {
      recipeNumber = 2;
    }
    return recipeNumber;

  }

  updateTheRecipe() {
    const wheels = [this.spinTheWheel(),this.spinTheWheel(),this.spinTheWheel(),];
    const spinner = [
      this.choosTheRecipe(wheels[0]),
      this.choosTheRecipe(wheels[1]),
      this.choosTheRecipe(wheels[2]),
    ];
    const backGroundPosition = spinner.map(
      (item,i) =>
        item * this.state.slotHeight + this.state.backGroundPosition[i]
    );
      this.setState({
        choosenRecipes: {
          breakfast: this.state.recipe.breakfast[`${spinner[0]}`],
          lunch: this.state.recipe.lunch[`${spinner[1]}`],
          dinner: this.state.recipe.dinner[`${spinner[2]}`]
        },
        backGroundPosition: backGroundPosition
      });
      this.showCards();
      console.log(spinner);
  }
  showCards() {
    this.setState({
      showCards: true,
      showMoreBtn: true
    });
  }

  render() {
    const {showCards} = this.state;
    console.log(this.state.data);
    return (
      <div className="bandit">
        <h1 className="bandit__header">
          Не знаешь, <br />
          что готовить? <br />
          Крути!
        </h1>
        <div className="bandit__display">
          <Spinner
            recipe={this.state.choosenRecipes.breakfast}
            backGroundPosition={this.state.backGroundPosition[0]}
            recipeType="breakfast"
          />
          <Spinner
            recipe={this.state.choosenRecipes.lunch}
            backGroundPosition={this.state.backGroundPosition[1]}
            recipeType="lunch"
          />
          <Spinner
            recipe={this.state.choosenRecipes.dinner}
            backGroundPosition={this.state.backGroundPosition[2]}
            recipeType="dinner"
          />
        </div>
        {this.state.showMoreBtn ? (
          <button
            onClick={() => this.updateTheRecipe()}
            className="bandit__button bandit__button_more"
          >
            Подобрать меню
          </button>
        ) : (
          <button
            onClick={() => this.updateTheRecipe()}
            className="bandit__button "
          >
            Подобрать меню
          </button>
        )}

        {/* show cards after spining the bandit */}
        {showCards && <Cards choosenRecipes={this.state.choosenRecipes} />}
      </div>
    );
  }
}

export default Bandit;
