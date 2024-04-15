import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FosoliUsers extends BaseSchema {
  protected tableName = 'fosoli_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('account_type').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
