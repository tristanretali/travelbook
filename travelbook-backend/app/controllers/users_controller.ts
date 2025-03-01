import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import UserService from '#services/user_service'
import { signupUserValidator, loginUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  async signup({ request }: HttpContext) {
    const { email, password, firstname, lastname } = request.only([
      'email',
      'password',
      'firstname',
      'lastname',
    ])
    await request.validateUsing(signupUserValidator)
    const user = await this.userService.createUser(email, password, firstname, lastname)
    await user.save()
    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '30 days',
    })

    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      value: token.value!.release(),
    }
  }

  async login({ request }: HttpContext) {
    await request.validateUsing(loginUserValidator)
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '10 h',
    })

    return {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      value: token.value!.release(),
    }
  }
}
