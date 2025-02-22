import Trip from '#models/trip'
import User from '#models/user'
import { Bouncer } from '@adonisjs/bouncer'

export const editPost = Bouncer.ability((user: User, trip: Trip) => {
  return user === trip.user
})
