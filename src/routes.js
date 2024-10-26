const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes', // 'path' harus dalam huruf kecil
    handler: addNoteHandler, // Fungsi langsung, bukan objek
  },
];

module.exports = routes;
