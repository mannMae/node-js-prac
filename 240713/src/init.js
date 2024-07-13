const { app } = require('./server.js');
const { tpAxios } = require('./lib/axios.js');

const onRunning = async () => {
  console.log('Running');
  try {
    const result = await tpAxios.post('APIURL', {
      username: 'USERNAME',
      password: 'PASSWORD',
    });
    console.log('RESULT', result);
  } catch (error) {
    console.error('ERROR', error);
  }
};

app.listen(8080, onRunning);
