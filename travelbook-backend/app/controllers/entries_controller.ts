import { HttpContext } from '@adonisjs/core/http'
import { creationEntryValidator } from '#validators/entry'
import EntryService from '#services/entry_service'
import { inject } from '@adonisjs/core'

@inject()
export default class EntriesController {
  constructor(protected entryService: EntryService) {}

  async create({ request, auth }: HttpContext) {
    const { content } = request.only(['content'])
    await auth.authenticate()

    if (auth.isAuthenticated) {
      await request.validateUsing(creationEntryValidator)
      const entry = await this.entryService.createEntry(content)
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
