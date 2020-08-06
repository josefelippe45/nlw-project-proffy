import React from 'react';
import api from '../../services/api';
//import do css
import './style.css';
//import dos assets
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

//definindo as props que passaremos pra nossa const q está sendo exportada
interface TeacherItemProps {
    teacher: {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
    }

}
//tornando a const em um functional component que recebe TeacherItemProps como suas props
//ao invés de usar props descontruimos o objeto para irmos direto a teacher
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    //quando o usuario clicar em entrar em contato essa function é disparada
    const createNewConnection = () => {
        api.post('connections',
            { user_id: teacher.id })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;