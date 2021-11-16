const { run } = require('vited');

// modify index.html , use  <script type="module" src="./demo/index"></script>

run(true, {
  server: {
    port: 9100,
  },
});
