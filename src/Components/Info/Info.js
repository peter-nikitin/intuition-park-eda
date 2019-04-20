import React from 'react';
import share from '../../assets/images/share.svg'
import park from '../../assets/images/park.svg'
import "./info.scss";


const info = (props) => {
    console.log(props)
    return ( 
        <div class={"info " + props.animation + "-info"}>
            <h1>О проекте</h1>
            <p>Подбиратор рецептов» для тех, кому тяжело придумать, что приготовить. Вращайте барабан и готовьте по крупной понятной инструкции.</p>
            <p>
                Сделали <span className="info__link">Степан Шашеро</span>, <span className="info__link">Пётр Никитин</span> и <span className="info__link">Людмила Ткаченко</span> за 7 недель в <span className="info__link">Парке Интуиции</span>.
            </p>
            <img src={park} alt="Парк"/>
            <p className="info__add">
                Добавьте «Подбиратор рецептов» на домашний экран. Для этого нажмите <img src={share} alt="share"/> в мобильном Сафари. 
                <br />
                <br />
                В Хроме на Андроиде <span className="info__link">нажмите на ссылку</span>.
            </p>
            <button onClick={props.onClick } className="info__closeBtn"
            >Закрыть x</button>
        </div>
     );
}
 
export default info;