import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
//import das imagens
//logoImg passou a ser uma variavel JS
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';
//import do css
import './styles.css';

//no react utilizamos className ao invés de class por que class é uma palavra reservada do javascript
/**o ReactJS trabalha com SPAs, Single Page Applications, então o href é 'obsoleto' nesse quesito */
const Landing = () => {
    //estado para as conexões
    const [totalConnections, setTotalConnections] = useState(0);
    /* o useEffect lida com alterações no estado
    segundo parametro é um array de dependências, ajuda a definir
    quando disparar a função do primeiro parametro, ou seja, quando
    os itens do array foram alteradas dispare a função novamente
    */
    useEffect(()=>{
        //faz a requisição
        api.get('/connections').then(res =>{
            const total = res.data.total;
            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;