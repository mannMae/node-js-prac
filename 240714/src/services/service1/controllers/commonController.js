const getRoot = (request, response) => {
  console.log('GET REQUEST BODY', request.body);
  return response.send('GET ROOT!');
};

module.exports.getRoot = getRoot;
