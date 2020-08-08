import React, { useState, FormEvent } from 'react';

//import dos componentes
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
//import do css
import './styles.css';

//interface que dá ao teacher o objeto id para identificalo como uma key unica
interface Teacher{
    id: number;
}

//title é uma propriedade criada, ela pode ter qualquer nome
const TeacherList = () => {
    //estado que auxilia na exibição de professores
    const [teachers, setTeachers] = useState([])
    //criando estados
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    //função que dispara com o form
    const searchTeachers = async (ev: FormEvent) => {
        ev.preventDefault();
        const res = await api.get('/classes', {
            //devido ao fato de ser um request GET ele precisa do params
            params: {
                subject,
                week_day,
                time
            }
        });
        setTeachers(res.data);

    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis" >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(ev) => { setSubject(ev.target.value) }}
                        /**a propriedade options é criada from scratch, do zero */
                        options={[
                            { value: 'Biologia', label: 'Biologia' },
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
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(ev) => { setWeekDay(ev.target.value) }}
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
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(ev) => { setTime(ev.target.value) }}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher )=> {
                    //um map que varre o array e exibe na web
                    return <TeacherItem key= {teacher.id} teacher={teacher}/>
                })}

            </main>
        </div>
    );
};
export default TeacherList;