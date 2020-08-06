import React from 'react';
import { Link } from 'react-router-dom';
//import do css
import './styles.css';
//import dos assets
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
//define as tipagens de um objeto
interface PageHeaderProps {
    title: string;
    //o ? torna a propriedade opcional
    description?: string;
}
//React.FC define a constante como um componente funcional ou functional component e ele recebe o props que foi criado
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p> }
                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;