const axios = require('axios');

test('Should get books', async function () {
 const response = await axios({
      url: 'http://localhost:3000/books',
      method: 'get'
  });  
  const books = response.data;
  expect(books).toHaveLength(14);
});