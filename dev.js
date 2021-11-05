const { run } = require('vited');

// modify index.html , use  <script type="module" src="./demo/index"></script>

run(true, {
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
});
