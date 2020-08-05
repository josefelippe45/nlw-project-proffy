import Knex from 'knex';

//migrations up, ele recebe as alterações que seram adotadas ao bd. recebe uma instancia de conexão com o banco
export async function up(knex: Knex) {
    //criando a tabela classes
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        //criando relacionamento
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            //caso um professor seja deletado as aulas somem juntos
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
}
//migrations down, ele trabalha como um 'backup'
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}