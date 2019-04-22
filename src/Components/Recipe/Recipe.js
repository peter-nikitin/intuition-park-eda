import React, { Component } from "react";
import "./recipe.scss";
// import boil from "../../assets/images/boil.png";
import arrow from "../../assets/images/arrow.svg";
import blend from "../../assets/images/activities/blend.png";
import boil from "../../assets/images/activities/boil.png";
import cut from '../../assets/images/activities/cut.png'
import fry from '../../assets/images/activities/fry.png'
import put from '../../assets/images/activities/put.png'
import serve from "../../assets/images/activities/serve.png";

export default class Recipe extends Component {

  render() {
    //  console.log(this.props.choosenIndex);
    return (
      <div className={"recipe " + this.props.animation + "-recipe"} id="recipe">
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
            this.props.recipeToOpen.steps.map((step, i) => {
              let action;
              switch (step.action) {
                case "blend":
                  action = blend;
                  break;
                case "boil":
                  action = boil;
                  break;
                case "cut":
                  action = cut;
                  break;
                case "fry":
                  action = fry;
                  break;
                case "put":
                  action = put;
                  break;
                case "serve":
                  action = serve;
                  break;
                default:
                  action = "";
              }
              return (
                <section key={i} className="recipe__step step">
                  <div className="image-wrapper">
                    <div className="title-wrapper">
                      <h3 className="step__index">{i + 1}</h3>
                      {/* <p className="step__name">Варить</p> */}
                      <h2 className="step__ingredients">{step.products}</h2>
                    </div>
                    <div className="step__pic">
                      <img src={action} alt="" />
                    </div>
                  </div>
                  <p className="step__description">{step.desc}</p>
                </section>
              );
            })}
        </div>
        <div className="recipe__buttons">
          <button
            className="recipe__backBtn recipe__backBtn_bottom"
            onClick={this.props.hideRecipeCard}
          >
            <img className="button-arrow" src={arrow} alt="" />
            <span className="button-text">
              назад
              {/* все <br /> рецепты */}
            </span>
          </button>
          {/* <button
            className="recipe__nextBtn"
            onClick={this.props.changeRecipe}
          >
            <span className="button-text">{this.props.nextRecipe.name}</span>
            <img
              className="button-arrow button-arrow_right"
              src={arrow}
              alt=""
            />
          </button> */}
        </div>
      </div>
    );
  }
}
