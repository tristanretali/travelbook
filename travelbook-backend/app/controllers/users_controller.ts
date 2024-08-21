// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  /*TODO Create validator */
  constructor(protected userService: UserService) {}

  async all({}: HttpContext) {
    return User.all()
  }

  async signup({ request, response }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')
    const firstName = request.input('firstname')
    const lastName = request.input('lastname')

    const user = await this.userService.createUser(email, password, firstName, lastName)
    await user.save()

    return response.status(200).json({
      status: 'ok',
    })
  }

  async login({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '30 days',
    })

    user.currentAccessToken = token
    return {
      value: token.value!.release(),
    }
  }
}
