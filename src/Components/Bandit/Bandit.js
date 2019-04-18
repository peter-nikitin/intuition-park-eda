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
      choosenRecipes: [
        recipe[0],
        recipe[0],
        recipe[0]
      ],
      showMoreBtn: false,
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  updateTheRecipe() {
      this.setState({
        choosenRecipes: [
        recipe[`${Bandit.matches[0]}`],
        recipe[`${Bandit.matches[1]}`],
        recipe[`${Bandit.matches[2]}`]
      ]
      });
      this.showCards();
  }
  showCards() {
    this.setState({
      showCards: true,
      showMoreBtn: true
    });
  }


  handleClick() {
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }


  static matches = [];

  finishHandler(value) {
    Bandit.matches.push(value); 

    if (Bandit.matches.length === 3) {
      this.updateTheRecipe();
      console.log(Bandit.matches);
    }
  }
  

  emptyArray() {
    Bandit.matches = [];
  }


  render() {
    const {showCards} = this.state;
    // console.log(Bandit.matches);
    return (
      <div className="bandit">
        <div className="bandit__display">
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child1 = child;
            }}
            timer="2000"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child2 = child;
            }}
            timer="2400"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child3 = child;
            }}
            timer="2200"
          />
        </div>
        {this.state.showMoreBtn ? (
          <button
            onClick={this.handleClick}
            className="bandit__button bandit__button_more"
          >
            Подобрать меню
          </button>
        ) : (
          <button onClick={this.handleClick} className="bandit__button ">
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
