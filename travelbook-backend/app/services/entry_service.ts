import Entry from '#models/entry'
import Trip from '#models/trip'

export default class EntryService {
  async createEntry(content: string, trip: Trip) {
    const entry = new Entry()
    entry.content = content
    entry.tripId = trip.id

    return entry
  }
}
