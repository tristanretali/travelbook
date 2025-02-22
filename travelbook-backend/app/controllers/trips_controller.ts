import TripService from '#services/trip_service'
import { HttpContext } from '@adonisjs/core/http'
import { creationTripValidator } from '#validators/trip'
import { inject } from '@adonisjs/core'
import Trip from '#models/trip'
import User from '#models/user'

@inject()
export default class TripsController {
  constructor(protected tripService: TripService) {}

  async all() {
    return Trip.all()
  }

  async create({ request, auth }: HttpContext) {
    const { tripName } = request.only(['tripName'])
    const user = await auth.authenticate()
    if (auth.isAuthenticated) {
      await request.validateUsing(creationTripValidator)
      const trip = await this.tripService.createTrip(tripName, user)
      await trip.save()
      return {
        status: 'OK',
        // Return the trip list for the current user
        trips: await User.query().preload('trips').where('id', user.id).firstOrFail(),
      }
    }
  }
}
