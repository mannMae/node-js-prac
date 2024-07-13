const Axios = require('axios');

const tpAxios = Axios.create({
  baseURL: 'BASE_URL',
});

module.exports.tpAxios = tpAxios;
