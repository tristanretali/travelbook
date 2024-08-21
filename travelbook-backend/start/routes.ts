/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const UsersController = () => import('#controllers/users_controller')

/*router.get('/', [UsersController, 'index'])*/
router
  .group(() => {
    router.post('signup', [UsersController, 'signup'])
    router.post('login', [UsersController, 'login'])

    router.get('users/all', [UsersController, 'all'])
  })
  .prefix('/api')
