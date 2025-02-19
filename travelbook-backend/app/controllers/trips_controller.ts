import TripService from '#services/trip_service'
import { HttpContext } from '@adonisjs/core/http'
import { creationTripValidator } from '#validators/trip'

export default class TripsController {
  constructor(protected tripService: TripService) {}

  async create({ request }: HttpContext) {
    const { tripName } = request.only(['tripName'])

    await request.validateUsing(creationTripValidator)
    const trip = await this.tripService.createTrip(tripName)
    await trip.save()

    return {
      status: 'OK',
    }
  }
}
