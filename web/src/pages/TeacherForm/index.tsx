import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
//import dos componentes
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
//import do css
import './styles.css';
//import de assets
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api';

const TeacherForm = () => {
    const history = useHistory()
    //criando estados para os inputs
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    //estado para criar novo horário
    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0,
            from: '',
            to: '',
        }
    ])
    //função pra lidar com o scheduleItem
    const addNewScheduleItem = () => {
        setScheduleItems([
            //spread operator para copiar os itens de um array. é como um merge
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: '',
            }
        ]);
    }
    //seta o valor do item do schedule
    const setScheduleItemValue = (position: number, field: string, value: string) => {
        //cria um novo array percorrendo o estado scheduleItems
        const updatedScheduleItems = scheduleItems.map((scheduleItems, index) => {
            if (index === position) {
                /*faz um merge do array existente e sobreescreve o novo field com o novo valor,
                 o [field]: value sobreescreve o valor de week_day que já existia no array*/
                return { ...scheduleItems, [field]: value }
            }
            return scheduleItems;
        });
        setScheduleItems(updatedScheduleItems)
    }
    //ira lidar com o cadastro
    const handleCreateClass = (ev: FormEvent) => {
        ev.preventDefault();
        //api para fazer request do post
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso!');
            //leva o usuário de volta ao endereço em questão
            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro!')
        });
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(ev) => { setName(ev.target.value)/**pega o nome e seta no estado */ }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(ev) => { setAvatar(ev.target.value)/**pega o avatar e seta no estado */ }}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(ev) => { setWhatsapp(ev.target.value)/**pega o whatsapp e seta no estado */ }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografía"
                            value={bio}
                            onChange={(ev) => { setBio(ev.target.value)/**pega a bio e seta no estado */ }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(ev) => { setSubject(ev.target.value) }}
                            /**a propriedade options é criada from scratch, do zero */
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biología', label: 'Biología' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Fisíca', label: 'Fisíca' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua aula por hora"
                            value={cost}
                            onChange={(ev) => { setCost(ev.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={ev => setScheduleItemValue(index, 'week_day', ev.target.value)}
                                        /**a propriedade options é criada from scratch, do zero */
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },

                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        onChange={ev => setScheduleItemValue(index, 'from', ev.target.value)} />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        onChange={ev => setScheduleItemValue(index, 'to', ev.target.value)} />
                                </div>
                            );
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar Cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    );
};
export default TeacherForm;