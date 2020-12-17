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
        'tbc ',
      highlights: `tbc`,
      description: `tbc`,
    },
  })
})

module.exports = profile
