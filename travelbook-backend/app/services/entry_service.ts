import Entry from '#models/entry'

export default class EntryService {
  async createEntry(content: string) {
    const entry = new Entry()
    entry.content = content

    return entry
  }
}
