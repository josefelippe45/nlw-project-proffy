import Knex from 'knex';

//migrations up, ele recebe as alterações que seram adotadas ao bd. recebe uma instancia de conexão com o banco
export async function up(knex: Knex){
    //criando a tabela users
    return knex.schema.createTable('users', table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}
//migrations down, ele trabalha como um 'backup'
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}