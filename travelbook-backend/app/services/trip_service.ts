import Trip from '#models/trip'
import User from '#models/user'

export default class TripService {
  async createTrip(tripName: string, coverImage: string, user: User) {
    const trip = new Trip()
    trip.tripName = tripName
    trip.coverImage = coverImage
    trip.userId = user.id

    return trip
  }
}
