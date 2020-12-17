const { Router } = require('express')

const profile = Router()

profile.get('/', (request, response) => {
  response.send({
    success: true,
    payload: {
      user: {
        avatar:
          'https://media-exp1.licdn.com/dms/image/C5603AQHiky3aOZwcig/profile-displayphoto-shrink_400_400/0/1539867504904?e=1613606400&v=beta&t=8KjgFWOHduCZeesdSYIwHaTFwmNHmtPnBWVgrFbvqUI',
        name: 'Shanna Barnard',
        position: 'Front End Developer',
      },
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      highlights: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  })
})

module.exports = profile
