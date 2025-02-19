import Trip from '#models/trip'

export default class TripService {
  async createTrip(tripName: string) {
    const trip = new Trip()
    trip.tripName = tripName
    return trip
  }
}
