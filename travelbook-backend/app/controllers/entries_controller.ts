import { HttpContext } from '@adonisjs/core/http'
import { creationEntryValidator } from '#validators/entry'
import EntryService from '#services/entry_service'
import { inject } from '@adonisjs/core'
import Trip from '#models/trip'
import Entry from '#models/entry'

@inject()
export default class EntriesController {
  constructor(protected entryService: EntryService) {}

  async create({ request, auth }: HttpContext) {
    const { content, tripId } = request.only(['content', 'tripId'])
    await auth.authenticate()

    if (auth.isAuthenticated) {
      await request.validateUsing(creationEntryValidator)
      const trip = await Trip.query().where('id', tripId).firstOrFail()
      const entry = await this.entryService.createEntry(content, trip)
      await entry.save()

      return {
        status: 'OK',
      }
    }

    return {
      status: 'KO',
    }
  }

  async show({ auth, params }: HttpContext) {
    await auth.authenticate()

    if (auth.isAuthenticated) {
      const entry = await Entry.query().where('id', params.id).firstOrFail()

      return {
        entry: entry,
      }
    }

    return {
      status: 'KO',
    }
  }
}
