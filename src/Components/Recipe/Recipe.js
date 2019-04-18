import React,{Component} from 'react';
import './recipe.scss';

export default class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
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
          
          <div className="recipe__ingredients">
            <div className="ingredient">
              <p>Капуста</p>
              <p>1 кочан</p>
            </div>
            <div className="ingredient">
              <p>Картошка</p>
              <p>4 шт</p>
            </div>
            <div className="ingredient">
              <p>Перец болгарский</p>
              <p>половина</p>
            </div>
          </div>

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
