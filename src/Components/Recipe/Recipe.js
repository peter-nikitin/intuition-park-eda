import React, { Component } from "react";
import "./recipe.scss";
// import boil from "../../assets/images/boil.png";
import arrow from "../../assets/images/arrow.svg";

export default class Recipe extends Component {
  render() {
    return (
      <div className={"recipe " + this.props.animation + "-recipe"}>
        <button
          className="recipe__backBtn"
          onClick={this.props.hideRecipeCard}
        >
          <img className="button-arrow" src={arrow} alt="" />
          назад
        </button>
        <div className="recipe__body">
          <img
            className="recipe__image"
            src={this.props.recipeToOpen.image}
            alt={this.props.recipeToOpen.name}
          />
          <h1 className="recipe__name">{this.props.recipeToOpen.name}</h1>
          <div className="recipe__ingredients">
            {this.props.recipeToOpen.ingrds &&
              this.props.recipeToOpen.ingrds.map((ingrd, i) => {
                const line = ingrd.split(":");
                return (
                  <div key={i} className="ingredient">
                    <p>{line[0]}</p>
                    <p>{line[1]}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="recipe__body">
          {this.props.recipeToOpen.steps &&
            this.props.recipeToOpen.steps.map((step, i) => (
              <section key={i} className="recipe__step step">
                <div className="image-wrapper">
                  <div className="title-wrapper">
                    <h3 className="step__index">{i + 1}</h3>
                    {/* <p className="step__name">Варить</p> */}
                    <h2 className="step__ingredients">{step.products}</h2>
                  </div>
                  <img
                    className="step__pic"
                    src={
                      require("../../assets/images/activities/" +
                      step.action +
                      ".svg")
                    }
                    alt=""
                  />
                </div>
                <p className="step__description">{step.desc}</p>
              </section>
            ))}
        </div>
      </div>
    );
  }
}
