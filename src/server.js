const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['http://notesapp-v1.dicodingacademy.com'], // Hanya izinkan origin tertentu
        credentials: true, // Jika menggunakan cookie atau otentikasi
        additionalHeaders: ['cache-control', 'x-requested-with'], // Tambahan header jika perlu
      },
    },
  });
  

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
