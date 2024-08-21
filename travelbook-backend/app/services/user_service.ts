import User from '#models/user'

export default class UserService {
  async createUser(email: string, password: string, firstName: string, lastName: string) {
    const user = new User()
    user.email = email
    user.password = password
    user.firstName = firstName
    user.lastName = lastName
    return user
  }
}
