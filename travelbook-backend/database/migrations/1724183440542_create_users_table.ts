import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('full_name')
      table.string('first_name')
      table.string('last_name')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
