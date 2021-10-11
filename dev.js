const { run } = require('vited');

// modify index.html , use ./demo/index

run(true, {
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
});
