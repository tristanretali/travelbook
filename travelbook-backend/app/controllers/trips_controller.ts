import TripService from '#services/trip_service'
import { HttpContext } from '@adonisjs/core/http'
import { creationTripValidator } from '#validators/trip'
import { inject } from '@adonisjs/core'
import User from '#models/user'

@inject()
export default class TripsController {
  constructor(protected tripService: TripService) {}

  /*async all() {
    return Trip.all()
  }*/

  async create({ request, auth }: HttpContext) {
    const { tripName, coverImage } = request.only(['tripName', 'coverImage'])
    const user = await auth.authenticate()
    if (auth.isAuthenticated) {
      await request.validateUsing(creationTripValidator)
      const trip = await this.tripService.createTrip(tripName, coverImage, user)
      await trip.save()
      return {
        status: 'OK',
      }
    }
    return {
      status: 'KO',
    }
  }

  async showUserTrips({ auth }: HttpContext) {
    const user = await auth.authenticate()
    if (auth.isAuthenticated) {
      const userTrips = await User.query()
        .preload('trips', (query) => {
          query.select('tripName', 'coverImage') // List only the fields you need
        })
        .where('id', user.id)
        .firstOrFail()
      return {
        trips: userTrips.trips,
      }
    }
  }
}
