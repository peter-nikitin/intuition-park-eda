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
      showCards: false
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
      this.setState({
        spinner: [
          this.choosTheRecipe(this.spinTheWheel()),
          this.choosTheRecipe(this.spinTheWheel()),
          this.choosTheRecipe(this.spinTheWheel())
        ],
        showCards: true
      });
  }

  render() {
    const {showCards} = this.state;
    console.log(this.state.data);
    return (
      <div className="bandit">
        <div className="bandit__display">
          <Spinner
            recipe={
              this.state.recipe.breakfast[`${this.state.spinner[0]}`].name
            }
          />
          <Spinner
            recipe={
              this.state.recipe.lunch[`${this.state.spinner[1]}`].name
            }
          />
          <Spinner
            recipe={
              this.state.recipe.dinner[`${this.state.spinner[2]}`].name
            }
          />
        </div>
        <button
          onClick={() => this.updateTheRecipe()}
          className="bandit__button"
        >
          Spin The bandit!
        </button>
        {/* show cards after spining the bandit */}
        {showCards && <Cards />}
      </div>
    );
  }
}

export default Bandit;
