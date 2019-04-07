
import React, { Component } from 'react'
import "./cards.scss";

export default class Cards extends Component {
  render() {
    return (
      <div className="bandit__cards card">
        <div className="card__item">
          <img
            src="https://source.unsplash.com/150x150/?food,breakfast"
            alt="recipe #1"
            className="card__image"
          />
          <div className="card__name">Breakfast</div>
        </div>
        <div className="card__item">
          <img
            src="https://source.unsplash.com/150x150/?food,lunch"
            alt="recipe #1"
            className="card__image"
          />
          <div className="card__name">Lunch</div>
        </div>
        <div className="card__item">
          <img
            src="https://source.unsplash.com/150x150/?food,dinner"
            alt="recipe #1"
            className="card__image"
          />
          <div className="card__name">Dinner</div>
        </div>
      </div>
    );
  }
}
