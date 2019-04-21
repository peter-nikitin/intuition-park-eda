import React from 'react';
import share from '../../assets/images/share.svg'
import park from '../../assets/images/park.svg'
import close from '../../assets/images/close.svg'
import "./info.scss";


const info = (props) => {
    console.log(props)
    return ( 
        <div className={"info " + props.animation + "-info"}>
            <h1>О проекте</h1>
            <p>Подбиратор рецептов» для тех, кому тяжело придумать, что приготовить. Вращайте барабан и готовьте по крупной понятной инструкции.</p>
            <p>
                Сделали <a className="info__link" href="#">Степан Шашеро</a>, <a className="info__link" href="#">Пётр Никитин</a> и <a className="info__link" href="#">Людмила Ткаченко</a> за 7 недель <a className="info__link" href="http://intuition.team/park">в&nbsp;Парке Интуиции</a>.
            </p>
            <a href="http://intuition.team/park"><img src={park} alt="Парк"/></a>
            <p className="info__add">
                Добавьте «Подбиратор рецептов» на домашний экран. Для этого нажмите <img src={share} alt="share"/> в мобильном Сафари. 
            </p>
            <button onClick={props.onClick } className="info__closeBtn"
            ><img src={close} alt="Закрыть инфо"/></button>
        </div>
     );
}
 
export default info;