import { Request, Response, response } from 'express';

//ajuda a definir o tipo do scheduleItem
interface ScheduleItem {
    week_day: Number;
    from: string;
    to: string;
}
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinute';
export default class ClassesController {
    //auxilia na listagem
    async index(req: Request, res: Response) {
        const filters = req.query;
        //listando os tipos das variaveis
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;
        //verificando  filtros
        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(404).json({
                error: "Missing filters to search classes"
            })
        }
        //criando conversão
        const timeInMinutes = convertHourToMinutes(time);

        //query do bd
        const classes = await db('classes')
            //criando uma subquery que ira verificar se existe um horário disponivel
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    //class_id está dentro de class_schedule
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    //os dois ?? significam um parametro, no caso, o week_day
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    //filtra melhor os horários que serão exibidos. retornando só os que são <= ao horario
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    //filtra melhor os horários que serão exibidos. retornando só os que são > ao horario
                    .whereRaw('`class_schedule`.`to` >= ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            //inner join users on classes.user_id = users.id
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])
        res.json(classes);
    }
    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
        //variavel para tratamento de erros
        const trx = await db.transaction()
        try {
            //o await ira aguardar a operação. INSERT INTO
            const insertedUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
            //pega o user_id de posição 0
            const user_id = insertedUsersId[0];

            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
            const class_id = insertedClassesIds[0];

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,

                    //convertendo os horarios para minutos
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    week_day: scheduleItem.week_day,
                };

            });
            //inserir classSchedule no db
            await trx('class_schedule').insert(classSchedule);

            await trx.commit();
            return res.status(200).send();
        } catch (err) {
            //desfaz qualquer alteração que tenha no try
            console.log(err)
            await trx.rollback()
            return res.status(404).json({
                error: "Unexpected error while creating new class"
            });
        }
    }
}
