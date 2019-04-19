import React,{Component} from 'react';
import './recipe.scss';
import boil from '../../assets/images/boil.png';
import arrow from '../../assets/images/arrow.svg';

export default class Recipe extends Component {
  render() {
    return (
      <div className={"recipe " + this.props.animation + "-recipe" }>
        <button
          className="recipe__backBtn"
          onClick={this.props.hideRecipeCard}
        >
        <img className="button-arrow" src={arrow} alt=""/>
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
        <div className="recipe__body">
          <section className="recipe__step step">
            <div className="image-wrapper" >
              <div className="title-wrapper">
                <h3 className="step__index">1</h3>
                <p className="step__name">Варить</p>
                <h2 className="step__ingredients">лук, морковка</h2>
              </div>
              <img className="step__pic" src={boil} alt=""/>
            </div>
            <p className="step__description">Бросаем курицу в воду. Варим бульон 40 мин, снимаем пенку</p>
          </section>
          <section className="recipe__step step">
            <div className="image-wrapper" >
              <div className="title-wrapper">
                <h3 className="step__index">2</h3>
                <p className="step__name">Варить</p>
                <h2 className="step__ingredients">лук, морковка, капуста, картошка</h2>
              </div>
              <img className="step__pic" src={boil} alt=""/>
            </div>
            <p className="step__description">Бросаем курицу в воду. Варим бульон 40 мин, снимаем пенку</p>
          </section>
          <section className="recipe__step step">
            <div className="image-wrapper" >
              <div className="title-wrapper">
                <h3 className="step__index">3</h3>
                <p className="step__name">Варить</p>
                <h2 className="step__ingredients">всё вместе</h2>
              </div>
              <img className="step__pic" src={boil} alt=""/>
            </div>
            <p className="step__description">Бросаем курицу в воду. Варим бульон 40 мин, снимаем пенку</p>
          </section>
          <section className="recipe__step step">
            <div className="image-wrapper" >
              <div className="title-wrapper">
                <h3 className="step__index">4</h3>
                <p className="step__name">Варить</p>
                <h2 className="step__ingredients">соль, перец, лавровый лист</h2>
              </div>
              <img className="step__pic" src={boil} alt=""/>
            </div>
            <p className="step__description">Бросаем курицу в воду. Варим бульон 40 мин, снимаем пенку</p>
          </section>
        </div>
      </div>
    );
  }
}
