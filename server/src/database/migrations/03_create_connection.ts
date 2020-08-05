import Knex from 'knex';

//migrations up, ele recebe as alterações que seram adotadas ao bd. recebe uma instancia de conexão com o banco
export async function up(knex: Knex) {
    //criando a tabela connections
    return knex.schema.createTable('connections', table => {
        //criando relacionamento
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            //caso um professor seja deletado as aulas somem juntos
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        //quando houve a conexão
        table.timestamp('created_at')
            //salva no campo created_at o horario atual
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    });
}
//migrations down, ele trabalha como um 'backup'
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}