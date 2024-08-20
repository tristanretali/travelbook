// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async all({}: HttpContext) {
    return User.all()
  }

  async signup({ request, response }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')
    const firstName = request.input('firstname')
    const lastName = request.input('lastname')
    const user = new User()
    user.email = email
    user.password = password
    user.firstName = firstName
    user.lastName = lastName
    await user.save()
    return response.status(200).json({
      status: 'ok',
    })
  }
}
