import React from 'react'

export default function Recipe(props) {
  return (
    <div className="recipe">
      <h1>{props.recipeToOpen.name}</h1>
      <img src={props.recipeToOpen.image} alt={props.recipeToOpen.name} />
      <button onClick={() => props.hideRecipe()}>Close</button>
      {/* {props.recipeToOpen.steps.map((step, i) => (
        <section key={i} className="recipe__steps step">
          <div className="step__name">{step.name}</div>
          <div className="step__text">{step.text}</div>
        </section>
      ))} */}
    </div>
  );
}