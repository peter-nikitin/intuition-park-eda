import React,{Component} from 'react';
import './recipe.scss';

export default class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
        <h1>{this.props.recipeToOpen.name}</h1>
        <img
          className="recipe__image"
          src={this.props.recipeToOpen.image}
          alt={this.props.recipeToOpen.name}
        />
        <button onClick={this.props.hideRecipeCard}>Close</button>
        {/* {this.props.recipeToOpen.steps.map((step, i) => (
        <section key={i} className="recipe__steps step">
          <div className="step__name">{step.name}</div>
          <div className="step__text">{step.text}</div>
        </section>
      ))} */}
      </div>
    );
  }
}
