/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const EntriesController = () => import('#controllers/entries_controller')
const TripsController = () => import('#controllers/trips_controller')
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router.post('signup', [UsersController, 'signup'])
    router.post('login', [UsersController, 'login'])
  })
  .prefix('/api')

router
  .group(() => {
    router.post('create', [TripsController, 'create'])
    router.post('modify', [TripsController, 'modifyUserTrip'])
    router.get('show', [TripsController, 'showUserTrips'])
    router.get('entries/:tripId', [TripsController, 'showEntries'])
  })
  .prefix('/api/trip')

router
  .group(() => {
    router.post('create', [EntriesController, 'create'])
    router.get('show/:id', [EntriesController, 'show'])
  })
  .prefix('/api/entry')
