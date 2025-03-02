import { HttpContext } from '@adonisjs/core/http'
import { creationEntryValidator } from '#validators/entry'
import EntryService from '#services/entry_service'
import { inject } from '@adonisjs/core'
import Trip from '#models/trip'

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
}
