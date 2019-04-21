import React, { Component } from "react";
import "./bandit.scss";
import Spinner from "../Spinner/Spinner";
import Cards from "../Cards/Cards";
import Info from "../Info/Info";
import recipe from "../../data/recipes";
import i from "../../assets/images/i.svg";

import RecipeCard from "../Recipe/Recipe";

class Bandit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: Array(3).fill(0),
      showCards: false,
      choosenRecipes: [recipe[0], recipe[0], recipe[0]],
      showMoreBtn: false,
      cardAnimation: "append",
      iSshowInfo: false,
      infoAnimation: "append",
      recipeAnimation: "append",
      choosen: "",
      choosenIndex: "",
      nextRecipe: ""
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showRecipe = this.showRecipe.bind(this);
    this.banditRef = React.createRef();
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
      showMoreBtn: true,
      cardAnimation: "append"
    });
  }

  emptyArray() {
    Bandit.matches = [];
  }

  handleClick() {
    this.setState({ cardAnimation: "hide", choosen: "" });
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
      this.setState({
        choosen: "choosen"
      });
    }
  }

  showRecipe(targetRecipe) {
    targetRecipe = recipe[0];
    const index =
      this.state.choosenRecipes.indexOf(targetRecipe) === -1
        ? 0
        : this.state.choosenRecipes.indexOf(targetRecipe);
    let nextRecipe;
    if (index === 2) {
      nextRecipe = this.state.choosenRecipes[0];
    } else {
      nextRecipe = this.state.choosenRecipes[index + 1];
    }

    this.setState({
      showRecipe: true,
      recipeToOpen: targetRecipe,
      recipeAnimation: "append",
      nextRecipe: nextRecipe
    });
  }

  showNextRecipe(target) {

    const divToScrollTo = document.getElementById(
      `recipe`
    );
    if (divToScrollTo) {
      divToScrollTo.scrollIntoView({
        behavior: "smooth"
      });
    }
    setTimeout(() => {
      this.showRecipe(target);
      // this.setState({
      //   recipeToOpen: target,
      //   recipeAnimation: "append"
      // });
    }, 1000);

    setTimeout(() => {
       this.setState({
         recipeAnimation: "hide"
       });
    }, 400);
   
  }

  hideRecipe() {
    setTimeout(() => {
      this.setState({
        showRecipe: !this.state.showRecipe
      });
    }, 500);
    this.setState({
      recipeAnimation: "hide"
    });
  }

  showInfo() {
    this.setState({
      iSshowInfo: !this.state.iSshowInfo,
      infoAnimation: "append"
    });
  }

  hideInfo() {
    setTimeout(() => {
      this.setState({
        iSshowInfo: !this.state.iSshowInfo
      });
    }, 1000);
    this.setState({
      infoAnimation: "hide"
    });
  }


  render() {
    const { showCards } = this.state;
    return (
      <div className="bandit" ref={this.banditRef}>
        
        <div
          className={
            "bandit__display bandit__display_" + this.state.choosen
          }
        >
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
            timer="2200"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child3 = child;
            }}
            timer="2200"
          />
        </div>
        {/* show cards after spining the bandit */}
        {showCards && (
          <Cards
            animation={this.state.cardAnimation}
            choosenRecipes={this.state.choosenRecipes}
            onClick={recipe => this.showRecipe(recipe)}
          />
        )}
        {/* bandit button  */}
        {this.state.showMoreBtn ? (
          <div className="bandit__buttons bandit__buttons_more">
            <button
              onClick={this.handleClick}
              className="bandit__spin bandit__spin"
            >
              Подобрать снова
            </button>
            <button
              onClick={() => this.showInfo()}
              className="bandit__info bandit__info_hidden"
            >
              <img src={i} alt="О проекте" />
            </button>
          </div>
        ) : (
          <div className="bandit__buttons">
            <button onClick={this.handleClick} className="bandit__spin ">
              Подобрать меню
            </button>
            <button
              onClick={() => this.showInfo()}
              className="bandit__info"
            >
              <img src={i} alt="О проекте" />
            </button>
          </div>
        )}
        {this.state.showRecipe && (
          <RecipeCard
            recipeToOpen={this.state.recipeToOpen}
            hideRecipeCard={() => this.hideRecipe()}
            animation={this.state.recipeAnimation}
            nextRecipe={this.state.nextRecipe}
            changeRecipe={() => this.showNextRecipe(this.state.nextRecipe)}
            choosenIndex={this.state.choosenIndex}
          />
        )}
        {this.state.iSshowInfo && (
          <Info
            animation={this.state.infoAnimation}
            onClick={() => this.hideInfo()}
          />
        )}
      </div>
    );
  }
}

export default Bandit;
