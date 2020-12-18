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
        'You can find me on LinkedIn or I am always happy to send over a copy of my lastest CV.',
      highlights: `I like to mentor, for a little while I taught several 10-day coding Bootcamp's (The Institute of Code) in Bali, Indonesia. HTML, CSS, Javascript and the tools/libraries/frameworks required to build, deploy and host responsive websites. Most of my students were wome and I managed to explain concepts from a different perspective, which resulted in real engagement from the students, sparking a passion in me to get more girls comfortable with tech, hopefully one day improving the current imbalance. I'm part of, follow and support a lot of these women in tech groups and am continuously working on my contribution to this.`,
      description: `Open-minded, pragmatic developer who is comfortable with change. Confident to voice up when I need help or advise and provide solutions when expectations are unrealistic. I want my colleagues to like me, and the best way I know how to do that is to do a good job. As developers, we have the privilege to learn and teach daily. I like working with others and always aim to make their experience working with me a positive one.`,
    },
  })
})

module.exports = profile
