/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TripsController = () => import('#controllers/trips_controller')
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router.post('signup', [UsersController, 'signup'])
    router.post('login', [UsersController, 'login'])

    /*router.get('users/all', [UsersController, 'all'])*/
  })
  .prefix('/api')

router
  .group(() => {
    router.post('create', [TripsController, 'create'])
    router.post('modify', [TripsController, 'modifyUserTrip'])
    router.post('show', [TripsController, 'showUserTrips'])
    /*router.get('all', [TripsController, 'all'])*/
  })
  .prefix('/api/trip')
