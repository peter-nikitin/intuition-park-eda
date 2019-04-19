import React,{Component} from 'react';
import './recipe.scss';

export default class Recipe extends Component {
  render() {
    return (
      <div className={"recipe " + this.props.animation + "-recipe" }>
        <button
          className="recipe__backBtn"
          onClick={this.props.hideRecipeCard}
        >
          назад
        </button>
        <div className="recipe__body">
        <img
          className="recipe__image"
          src={this.props.recipeToOpen.image}
          alt={this.props.recipeToOpen.name}
        />
          <h1 className="recipe__name">{this.props.recipeToOpen.name}</h1>

          {this.props.recipeToOpen.steps && this.props.recipeToOpen.steps.map(
            (step, i) => (
              <section key={i} className="recipe__steps step">
                <div className="step__name">{step.name}</div>
                <div className="step__text">{step.text}</div>
              </section>
            )
          )}
        </div>
      </div>
    );
  }
}
