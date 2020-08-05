import React from 'react';

//import do css
import './style.css';
//import dos assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/50035433?s=460&u=dbfe4144d2b550069fd20e9cd3440a0d8586bfb5&v=4" alt="José Felippe" />
                <div>
                    <strong>José Felippe</strong>
                    <span>Desenvolvedor</span>
                </div>
            </header>
            <p>
                I'm in college studying Technologist in System Analysis
        <br /><br />
        at FATEC Ferraz de Vasconcelos.
        I use git as a portfolio and a reference for learning.
    </p>
            <footer>
                <p>
                    Preço/Hora
            <strong>Grátis</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;