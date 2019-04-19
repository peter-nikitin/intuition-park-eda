import React,{Component} from 'react';
import './recipe.scss';
import boil from '../../assets/images/boil.png';

export default class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
        <button
          className="recipe__backBtn"
          onClick={this.props.hideRecipeCard}
        >
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071C9.09763 15.3166 9.09763 14.6834 8.70711 14.2929L7.29289 15.7071ZM0.999999 8L0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L0.999999 8ZM8.70711 1.70711C9.09763 1.31658 9.09763 0.683418 8.70711 0.292893C8.31658 -0.0976305 7.68342 -0.0976305 7.29289 0.292893L8.70711 1.70711ZM8.70711 14.2929L1.70711 7.29289L0.292893 8.70711L7.29289 15.7071L8.70711 14.2929ZM1.70711 8.70711L8.70711 1.70711L7.29289 0.292893L0.292893 7.29289L1.70711 8.70711Z" fill="black"/>
        </svg>
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
