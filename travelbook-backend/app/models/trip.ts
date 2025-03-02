import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import * as relations from '@adonisjs/lucid/types/relations'
import Entry from '#models/entry'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Trip extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare tripName: string

  @column()
  declare userId: number

  // À revoir peut-être qu'il y a une autre manière de faire
  @column()
  declare coverImage: string

  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>

  @hasMany(() => Entry)
  declare entries: HasMany<typeof Entry>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
