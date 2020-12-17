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
        'I\'m going to be super lazy as I am now running out of time(11pm). CV with Dan, although original idea was some sort of career timeline.',
      highlights: `I like to mentor, for a little while I taught at a 10-day coding Bootcamp (The Institute of Code) in Bali, Indonesia. HTML, CSS, Javascript and the other tools / libraries required to build, deploy and host responsive websites.`,
      description: `Open-minded, pragmatic developer who is comfortable with change. Confident to voice up when I am unable to deliver. I want my colleagues to like me and the best way I know how to do that is to do a good job. As developers, we have the privilege to learn and teach daily. I like working with others and always aim to make their experience working with me a positive one.`,
    },
  })
})

module.exports = profile
