import React, { Component } from "react";
import "./bandit.scss";
import Spinner from "./Spinner";

class Bandit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        breakfast: ["#1 breakfast", "#2 breakfast", "#3 breakfast"],
        lunch: ["#1 lunch", "#2 lunch", "#3 lunch"],
        dinner: ["#1 dinner", "#2 dinner", "#3 dinner"]
      },
      spinner: Array(3).fill(0)
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
      console.log(this)
      this.setState({
        spinner: [
          this.choosTheRecipe(this.spinTheWheel()),
          this.choosTheRecipe(this.spinTheWheel()),
          this.choosTheRecipe(this.spinTheWheel())
        ]
      });
  }

  render() {
    return (
      <div className="bandit">
        <div className="bandit__display">
          <div className="bandit__spinner">
            <Spinner
              recipe={
                this.state.recipe.breakfast[`${this.state.spinner[0]}`]
              }
            />
          </div>
          <div className="bandit__spinner">
            <Spinner
              recipe={this.state.recipe.lunch[`${this.state.spinner[1]}`]}
            />
          </div>
          <div className="bandit__spinner">
            <Spinner
              recipe={this.state.recipe.dinner[`${this.state.spinner[2]}`]}
            />
          </div>
        </div>
        <button onClick={() => this.updateTheRecipe()}>
          Spin The bandit!
        </button>
      </div>
    );
  }
}

export default Bandit;
