import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'trips'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('trip_name')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
