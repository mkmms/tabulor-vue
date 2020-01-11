const faker = require('faker');

const data = []

for(let i = 0; i<100; i++){
  data.push(
    faker.helpers.createCard()
  )
}


module.exports = data