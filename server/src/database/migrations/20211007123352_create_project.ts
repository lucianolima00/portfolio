import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists('project', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('first_tech').notNullable();
        table.string('second_tech');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('project');
}
