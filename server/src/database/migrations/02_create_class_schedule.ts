import Knex from 'knex';

//migrations up, ele recebe as alterações que seram adotadas ao bd. recebe uma instancia de conexão com o banco
export async function up(knex: Knex) {
    //criando a tabela class_schedule
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();
        //criando relacionamento
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            //caso um professor seja deletado as aulas somem juntos
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
}
//migrations down, ele trabalha como um 'backup'
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}