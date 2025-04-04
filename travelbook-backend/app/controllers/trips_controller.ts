import TripService from '#services/trip_service'
import { HttpContext } from '@adonisjs/core/http'
import { creationTripValidator, modifyTripValidator } from '#validators/trip'
import { inject } from '@adonisjs/core'
import User from '#models/user'
import Trip from '#models/trip'
import Entry from '#models/entry'

@inject()
export default class TripsController {
  constructor(protected tripService: TripService) {}

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

  async modifyUserTrip({ request, auth }: HttpContext) {
    const { tripName, coverImage, tripId } = request.only(['tripName', 'coverImage', 'tripId'])
    await auth.authenticate()

    if (auth.isAuthenticated) {
      await request.validateUsing(modifyTripValidator)
      const trip = await Trip.query().where('id', tripId).firstOrFail()
      trip.tripName = tripName
      trip.coverImage = coverImage
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
          query.select('tripName', 'coverImage', 'id')
        })
        .where('email', user.email)
        .firstOrFail()

      return {
        trips: userTrips.trips,
      }
    }

    return {
      status: 'KO',
    }
  }

  async showEntries({ auth, params }: HttpContext) {
    await auth.authenticate()

    if (auth.isAuthenticated) {
      const tripEntries = await Entry.query().where('tripId', params.tripId)

      return {
        tripEntries: tripEntries,
      }
    }

    return {
      status: 'KO',
    }
  }
}
